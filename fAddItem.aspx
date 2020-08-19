<%@ Page Language="C#" AutoEventWireup="true" CodeFile="fAddItem.aspx.cs" Inherits="prjOrder.fAddItem" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Add Item</title>
    <link href="../style.css" rel="stylesheet" type="text/css" />
    <style>
        .aditblOutFrame
        {
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .adidivArea
        {
            width: 613px;
            height: 450px;
            background-color: #4b6c9e; 
            border-top: solid 1px silver;
            border-left: solid 1px silver;
            border-right: solid 1px black;
            border-bottom: solid 1px black;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="adidivArea">
        <table id="adiouterFrame" class="aditblOutFrame" runat="server" border="0" cellspacing="1" cellpadding="1" width="100%">
            <tr>
                <td><b>Add Item</b></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td width="150"><asp:Label ID="lblSKU" runat="server" Text="SKU"></asp:Label></td>
                <td width="200px">
                    <asp:DropDownList ID="ddlSku" runat="server" AutoPostBack="false" OnChange="ddlSku_Changed(this)">
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td width="150"><asp:Label ID="lblQuantity" runat="server" Text="Quantity"></asp:Label></td>
                <td><asp:TextBox ID="txtQuantity" runat="server"></asp:TextBox></td>
            </tr>
            <tr>
                <td width="150"><asp:Label ID="lblPrice" runat="server" Text="Price"></asp:Label></td>
                <td><asp:TextBox ID="txtPrice" runat="server"></asp:TextBox></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
        </table>
        <table>
            <tr>
                <td><asp:Button ID="btnCancel" runat="server" Text="Cancel" onclick="btnCancel_Click" /></td>
                <td><asp:Button ID="btnAdd" runat="server" Text="Add" onclick="btnAdd_Click" /></td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
