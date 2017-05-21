//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
"16cokYClbZIgxL_ElLjAjrKOIol4c5sAMcwhx9sWmy3M";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [
{  "data": "Name", "title": "Name" }, 
{  "data": "Address", "title": "Address"} , 
{	"data": "Tel", "title": "Tel" }, 
{  "data": "Type",  "title": "Type" }, 
{  "data": "X Coord",  "title": "X Co-Ord." }, 
{  "data": "Y Coord", "title": "Y Co-Ord." }, 
{  "data": "Googlemapslink", "title": "Google Maps link", "render": function(data, type, row, meta) {
            if(type === '#graphic'){
                data = '<a href="' + data + '">' + data + '</a>';
            }
            
            return data;
         }
}, 
{  "data": "Linktophoto", "title": "Link to Photo"}
];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
      );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [
      [2, "desc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
      });
  }
});
//end of writeTable
