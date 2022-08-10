$(document).ready(function(e) {

    var data = [{ id: "1", name: "Definir la acción 1", start: "2019-07-16", end: "2020-07-20", progress: 55 },
        { id: "2", name: "Ajustar los documentos", start: "2019-07-19", end: "2019-07-21", progress: 85, dependencies: "1" },
        { id: "3", name: "Reunirse con las asociaciones", start: "2019-07-21", end: "2019-07-22", progress: 80, dependencies: "2" },
        { id: "4", name: "Desarrollo rural", start: "2019-07-15", end: "2019-07-17", progress: 80 },
        { id: "5", name: "Planificar metodos", start: "2019-07-18", end: "2019-07-22", progress: 65, dependencies: "4" },
        { id: "6", name: "seleccionar emprendedores", start: "2019-07-20", end: "2019-07-31", progress: 15 },
        { id: "7", name: "Reuniones sectoriales", start: "2019-07-25", end: "2019-07-26", progress: 99, dependencies: "6" },
        { id: "8", name: "Coordinar desarrollo turistico", start: "2019-07-28", end: "2019-07-30", progress: 35, dependencies: "7" },
        { id: "9", name: "Diseñar plan 2021", start: "2019-08-01", end: "2019-08-03", progress: 25, dependencies: "8" },
        { id: "10", name: "habilitar datos estadisticos", start: "2019-08-05", end: "2019-08-07", progress: 60, dependencies: "9" },
        { id: "11", name: "Definir la acción 64", start: "2019-07-16", end: "2019-07-20", progress: 55, dependencies: "null" },
    ];

    $.ajax({
        url: 'get-data/agendabd.php',
        type: 'get',
        dataType: 'JSON',
        success: function(response) {
            data[0] = response;
            loaddatagantt(data);
        }
    });

    console.log("hola");

});


function loaddatagantt(data) {
    console.log(data);
    var s = new Gantt(
        "#tasks-gantt", data[0], {
            view_modes: ["Day", "Week", "Month"],
            bar_height: 30,
            padding: 18,
            view_mode: "Month",
            custom_popup_html: function(e) {
                e.end, 60 <= e.progress || (30 <= e.progress && e.progress);
                console.log(e);
                return '<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip"><div class="arrow"></div><div class="popover-body"><h5>' + e.name + '</h5><p class="mb-2">Se espera finalizar el ' + e.end + '</p><div class="progress mb-2" style="height: 10px;"><div class="progress-bar ${progressCls}" role="progressbar" style="width: ' + e.progress + '%;" aria-valuenow="${task.progress}" aria-valuemin="0" aria-valuemax="100">' + e.progress + '</div></div></div></div>';
            },
        }
    );
    $("#modes-filter :input").change(function() {
        s.change_view_mode($(this).val());
    });
}