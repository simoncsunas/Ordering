<%@ Page Language="C#" AutoEventWireup="true" CodeFile="fSkusNew.aspx.cs" Inherits="prjOrder.fSkusNew" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SKUs Entry</title>
    <link href="../style.css" rel="stylesheet" type="text/css" />
    <style>
        .skuntblOutFrame
        {
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .skundivArea
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
    <div class="skundivArea">
        <table id="skunouterFrame" class="skuntblOutFrame" runat="server" border="0" cellspacing="1" cellpadding="1" width="100%">
            <tr>
                <td><b>SKUs Entry</b></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td width="150"><asp:Label ID="lblName" runat="server" Text="Name"></asp:Label></td>
                <td><asp:TextBox ID="txtName" runat="server"></asp:TextBox></td>
            </tr>
            <tr>
                <td width="150"><asp:Label ID="lblCode" runat="server" Text="Code"></asp:Label></td>
                <td><asp:TextBox ID="txtCode" runat="server"></asp:TextBox></td>
            </tr>
            <tr>
                <td width="150"><asp:Label ID="lblUnitPrice" runat="server" Text="Unit Price"></asp:Label></td>
                <td><asp:TextBox ID="txtUnitPrice" runat="server"></asp:TextBox></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
        </table>
        <table>
            <tr>
                <td><asp:Button ID="btnCancel" runat="server" Text="Cancel" onclick="btnCancel_Click" /></td>
                <td><asp:Button ID="btnSave" runat="server" Text="Save" onclick="btnSave_Click" /></td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
