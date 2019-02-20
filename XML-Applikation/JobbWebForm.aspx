<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="JobbWebForm.aspx.cs" Inherits="Jobbuppgift.JobbWebForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" lang="javascript">
        $(document).ready(function () {

            var userPreference = "";
            document.getElementById("msg").innerHTML = userPreference; 


            $('#add-btn').click(function () {
                var addTitle = $('#TextBox2').val();

                if (addTitle.length == 0) {
                    userPreference = "cannot insert empty title";
                    document.getElementById("msg").innerHTML = userPreference; 
                    return null;
                }

                $.ajax({
                    url: "JobbWebService.asmx/AddBook",
                    method: "POST",
                    contentType: 'application/json;charset=utf-8',
                    data: '{ title:' + JSON.stringify(addTitle) + '}',
                    success: function (data) {
                        if (data.d != "") {
                            userPreference = addTitle + " already exist in the xml";
                            document.getElementById("msg").innerHTML = userPreference;
                        }
                        if (data.d == "") {
                            userPreference = addTitle + " has been added";
                            document.getElementById("msg").innerHTML = userPreference;
                        }
                    },
                    error: function (msg) {

                        alert(msg.responseText);
                    }
                });
            });

            $('#search-btn').click(function () {

                var webFormTitle = $('#TextBox1').val();

                if (webFormTitle.length == 0) {
                    userPreference = "cannot search for empty title";
                    document.getElementById("msg").innerHTML = userPreference;
                    return null;
                }

                $.ajax({
                    url: "JobbWebService.asmx/getTitleJSON",
                    dataType: "json",
                    type: "POST",
                    data: { title: webFormTitle },
                    success: function (data) {
                        var dataStrings = JSON.stringify(data);
                        
                        dataStrings = dataStrings.replace(",", "<br>");

                        var tr = "<tr>";
                        var td1 = "<td>" + dataStrings + "</td></tr>";
                        $("#tbl").append(tr + td1);

                        userPreference = "";
                        document.getElementById("msg").innerHTML = userPreference;
                    },
                        error: function (msg) {

                            alert(msg.responseText);
                        }
                });
            });
        });
    </script>
</head>
<body>    
    <form runat="server">
    <div id="input-fields">
    <asp:TextBox CssClass="textBox" Name="TextBox2" ID="TextBox2" runat="server" placeholder="Add a title here..."></asp:TextBox>
    <input id="add-btn" type="button" value="ADD" />
    <asp:TextBox CssClass="textBox" Name="TextBox1" ID="TextBox1" runat="server" placeholder="Search for a title here..."></asp:TextBox>
    <input id="search-btn" type="button" value="SEARCH" />
        </div>
        <hr />
        <table id="tbl">
            <tr>
                <td id="t-header">TITLE</td>
            </tr>
        </table>
    </form>
    <hr />
    <footer>
        <p id="msg"></p>
    </footer>
</body>
</html>

<style>

#tbl {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#tbl td, #tbl th {
  border: 1px solid #ddd;
  padding: 8px;
}

#tbl tr:nth-child(even){background-color: #f2f2f2;}

#tbl tr:hover {background-color: #ddd;}

#tbl th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

#t-header {
    text-align:center;
    font-family:Arial;
    font-size:20px;
}

input[type=button] {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=button]:hover {
  background-color: #45a049;
}

.textBox {
  padding: 14px 20px;
  margin: 8px 0;
  border-radius: 4px;
}

#input-fields {
    text-align:center;
}



</style>
                            

<%--Med hjälp av stringify--%>
<%--                        var dataStrings = JSON.stringify(data);


                            var tr = "<tr>";
                            var td1 = "<td>" + dataStrings + "</td></tr>";
                            $("#tbl").append(tr + td1);
                    },--%>

<%--med hjälp av xml istället för json--%>
<%--    $(function () {
                       $(document).ready(function () {
            $('#btn').click(function () {
                var webFormTitle = $('#TextBox1').val();
                $.ajax({
                    url: 'JobbWebService.asmx/getTitle',
                    data: { title: webFormTitle },
                    type: 'post',
                    dataType: 'xml',
                    success: function (data) {
                        var jqueryXML = $(data);
                        $('#TextBox2').val(jqueryXML.find('Title').text());
                    },
                    error: function (err) {
                        alert(err);
                    }
                });
            });
            });
        });
    </script>
</head>
<body>

    <form id="form2" runat="server">
    <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
    <input id="btn" type="button" value="button" />
    <asp:Label ID="Label1" runat="server" Text="Title:"></asp:Label>

    <input id="TextBox2" type="text" />

    </form>
</body>
</html>--%>
