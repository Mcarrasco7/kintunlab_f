<?php
$database = include($completarurl.'/configuracion/config.php');
class DB{
    
    private $dbHost     = "localhost:3306";
    private $dbUsername = "root";
    private $dbPassword = "";
    private $dbName     = "kintunlab_f";
    
    public function __construct(){
        if(!isset($this->db)){
            // Connect to the database
            $conn = new mysqli($this->dbHost, $this->dbUsername, $this->dbPassword, $this->dbName);
            $conn->set_charset("utf8");
            
            if($conn->connect_error){
                die("Failed to connect with MySQL: " . $conn->connect_error);
            }else{
                $this->db = $conn;
                
                
            }
        }
    }
    
    /*
     * Returns rows from the database based on the conditions
     * @param string name of the table
     * @param array select, where, order_by, limit and return_type conditions
     */
    public function getRows($table,$conditions = array()){
        $sql = 'SELECT ';
        $sql .= array_key_exists("select",$conditions)?$conditions['select']:'*';
        $sql .= ' FROM '.$table;
        if(array_key_exists("where",$conditions)){
            $sql .= ' WHERE ';
            $i = 0;
            foreach($conditions['where'] as $key => $value){
                $pre = ($i > 0)?' AND ':'';
                $sql .= $pre.$key." = '".$value."'";
                $i++;
            }
        }
        
        if(array_key_exists("order_by",$conditions)){
            $sql .= ' ORDER BY '.$conditions['order_by']; 
        }
        
        
        if(array_key_exists("start",$conditions) && array_key_exists("limit",$conditions)){
            $sql .= ' LIMIT '.$conditions['start'].','.$conditions['limit']; 
        }elseif(!array_key_exists("start",$conditions) && array_key_exists("limit",$conditions)){
            $sql .= ' LIMIT '.$conditions['limit']; 
        }
        
        $result = $this->db->query($sql);
        
        if(array_key_exists("return_type",$conditions) && $conditions['return_type'] != 'all'){
            switch($conditions['return_type']){
                case 'count':
                    $data = $result->num_rows;
                    break;
                case 'single':
                    $data = $result->fetch_assoc();
                    break;
                default:
                    $data = '';
            }
        }else{
            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    $data[] = $row;
                }
            }
        }        
        return !empty($data)?$data:false;
    }

    public function getRows2($table,$conditions = array()){
        $sql = 'SELECT ';
        $sql .= array_key_exists("select",$conditions)?$conditions['select']:'*';
        $sql .= ' FROM '.$table;
        if(array_key_exists("where",$conditions)){
            $sql .= ' WHERE ';
            $i = 0;
            foreach($conditions['where'] as $key => $value){
                $pre = ($i > 0)?' AND ':'';
                $sql .= $pre.$key." = '".$value."'";
                $i++;
            }
        }
        
        if(array_key_exists("order_by",$conditions)){
            $sql .= ' ORDER BY '.$conditions['order_by']; 
        }
        if(array_key_exists("order_by2",$conditions)){
            $sql .= ', '.$conditions['order_by']; 
        }
        
        if(array_key_exists("start",$conditions) && array_key_exists("limit",$conditions)){
            $sql .= ' LIMIT '.$conditions['start'].','.$conditions['limit']; 
        }elseif(!array_key_exists("start",$conditions) && array_key_exists("limit",$conditions)){
            $sql .= ' LIMIT '.$conditions['limit']; 
        }
        
        $result = $this->db->query($sql);
        
        if(array_key_exists("return_type",$conditions) && $conditions['return_type'] != 'all'){
            switch($conditions['return_type']){
                case 'count':
                    $data = $result->num_rows;
                    break;
                case 'single':
                    $data = $result->fetch_assoc();
                    break;
                default:
                    $data = '';
            }
        }else{
            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    $data[] = $row;
                }
            }
        }        
        return !empty($data)?$data:false;
    }
    
    /*
     * Update data into the database
     * @param string name of the table
     * @param array the data for updating into the table
     * @param array where condition on updating data
     */
    public function update($table,$data,$conditions){
        if(!empty($data) && is_array($data)){
            $colvalSet = '';
            $whereSql = '';
            $i = 0;
            /*
            if(!array_key_exists('modified',$data)){
                $data['modified'] = date("Y-m-d H:i:s");
            }
            */
            foreach($data as $key=>$val){
                $pre = ($i > 0)?', ':'';
                $colvalSet .= $pre.$key."='".$val."'";
                $i++;
            }
            if(!empty($conditions)&& is_array($conditions)){
                $whereSql .= ' WHERE ';
                $i = 0;
                foreach($conditions as $key => $value){
                    $pre = ($i > 0)?' AND ':'';
                    $whereSql .= $pre.$key." = '".$value."'";
                    $i++;
                }
            }
            $query = "UPDATE ".$table." SET ".$colvalSet.$whereSql;
            $update = $this->db->query($query);
            //return $update?$this->db->affected_rows:false;
            return $query;
        }else{
            return false;
        }
    }

    public function insert2($table,$data){
        if(!empty($data) && is_array($data)){
            
            $campos = '';
            $valores = '';
            $i = 0;
            $largo = count($data);
            foreach($data as $key=>$val){
                if(!empty($val)){
                    if(($i >= 1) && ($i< $largo)){$pre = ', ';}else{$pre ='';}
                    $campos .= $pre.$key;
                    $valores .= $pre."'".$val."'";
                    $i++;
                }

            }

            
            //$fields = $fields." fecha-creacion = NOW()";
            
            $query = "INSERT INTO ".$table." ( ".$campos." ) VALUES (".$valores.")";
            $insert = $this->db->query($query);
            //return $update?$this->db->affected_rows:false;
            return $query;
        }else{
            return false;
        }
    }
    
    
    /*
     * Delete data from the database
     * @param string name of the table
     * @param array where condition on deleting data
     */
    public function delete($table,$conditions){
        $whereSql = '';
        if(!empty($conditions)&& is_array($conditions)){
            $whereSql .= ' WHERE ';
            $i = 0;
            foreach($conditions as $key => $value){
                if ($key=="estado"){
                    $pre = ($i > 0)?' AND ':'';
                    $whereSql .= $pre.$key." = ".$value."";
                    $i++;
                }
                else{
                    $pre = ($i > 0)?' AND ':'';
                    $whereSql .= $pre.$key." = '".$value."'";
                    $i++;
                }
            }
        }
        $query = "DELETE FROM ".$table.$whereSql;
        $delete = $this->db->query($query);
        return $delete?true:false;
    }

    public function insert($table){
        $query = "INSERT INTO ".$table."(id_alerta,estado) VALUES (1,0)";
        $insert = $this->db->query($query);
        $last_id = $this->db->insert_id;
        return $insert?$this->db->insert_id:true;
    }

    public function insert_recu($table){
        $query = "INSERT INTO ".$table."(id_alerta,estado) VALUES (1,0)";
        $insert = $this->db->query($query);
        $last_id = $this->db->insert_id;
        return $insert?$this->db->insert_id:true;
    }

    public function insert_miti($table){
        $query = "INSERT INTO ".$table."(id_alerta,estado) VALUES (1,0)";
        $insert = $this->db->query($query);
        $last_id = $this->db->insert_id;
        return $insert?$this->db->insert_id:true;
    }
}


?>
