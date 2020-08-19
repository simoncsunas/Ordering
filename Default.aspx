<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="prjOrder._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ORDERING SYSTEM</title>
    <link href="../style.css" rel="stylesheet" type="text/css" />
    <style>
        .tblEvtFrame
        {
            font-family:'Trebuchet MS',  'Courier New', 'Helvetica', 'sans-serif';
        	font-size:12pt;
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .tblMsgFrame
        {
        	font-family:'Trebuchet MS',  'Roman', 'Helvetica', 'sans-serif';
        	font-size:8pt;
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .tblDashFrame
        {
        	font-family:'Trebuchet MS',  'Arial', 'Helvetica', 'sans-serif';
        	font-size:10pt;
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .tblHeadFrame
        {
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .tblOutFrame
        {
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: center;
            border-collapse: collapse;
        }
        .divArea
        {
            width: 700px;
            height: 640px;
            background-color: #EEEEEE; 
            border-top: solid 1px silver;
            border-left: solid 1px silver;
            border-right: solid 1px black;
            border-bottom: solid 1px black;
        }
    </style>
</head>
<body>
    <form id="form1" method="post" runat="server">
    <center>
    <div class="divArea">
        <table id="outerFrame" class="tblOutFrame" runat="server" border="0" cellspacing="1" cellpadding="1" width="100%" height="100%">
            <tr>
                <td>
                    <table id="headerFrame" class="tblHeadFrame" border="0" cellspacing="1" cellpadding="1" width="100%" >
                        <tr>
                            <td width="10%">
                                <asp:Image ID="imgLogo" runat="server" Height="68px" ImageUrl="sLogo.png" Width="130px" />
                            </td>
                            <td width="1%">&nbsp;</td>
                            <td width="89%">
                                <table>
                                    <tr>
                                        <td><font face="Courier New" size="6"><b>Company Name</b></font></td>
                                    </tr>
                                    <tr>
                                        <td><font face="Courier New" size="2"><b>Address</b></font></td>
                                    </tr>
                                    <tr>
                                        <td><font face="Courier New" size="2"><b>Contact No.</b></font></td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td><font face="Courier New" size="4"><b>IT Department</b></font></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table id="dashFrame" class="tblDashFrame" border="0" cellspacing="1" cellpadding="1" width="100%" >
                        <tr>
                            <td style="text-align:center"><b>DASHBOARD</b></td>
                        </tr>
                    </table>
                    <table id="messageFrame" class="tblMsgFrame" border="0" cellspacing="1" cellpadding="1" width="100%" >
                        <tr>
                            <td><asp:Label ID="lblMessage" runat="server" Text="Status:"></asp:Label></td>
                        </tr>
                    </table>
                    <table id="eventFrame" class="tblEvtFrame" border="1" cellspacing="1" cellpadding="1" width="100%" height="72%">
                        <tr>
                            <td style="text-align:left" valign="top">
                                <a href="fCustomer.aspx" target="ifrm"><b>Customer</b></a><br/>
                                <a href="fSkus.aspx" target="ifrm"><b>SKU</b></a><br/>
                                <a href="fOrderList.aspx" target="ifrm"><b>Orders</b></a><br/>
                            </td>
                            <td width="90%"><iframe id="ifrm" name="ifrm" src="fCustomer.aspx" 
                                                    frameborder="0"
                                                    marginheight="0" marginwidth="0"
                                                    width="100%" height="100%"
                                                    scrolling="auto" runat="server">&nbsp;</iframe></td>
                        </tr>
                    </table> 
                </td>
            </tr>      
        </table>
    </div>
    </center>
    </form>
</body>
</html>
