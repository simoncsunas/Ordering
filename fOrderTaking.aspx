<%@ Page Language="C#" AutoEventWireup="true" CodeFile="fOrderTaking.aspx.cs" Inherits="prjOrder.fOrderTaking" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Order Taking</title>
    <script type="text/javascript" src="common.js"></script>
    <script type="text/javascript" src="date-picker.js"></script>
    <link href="../style.css" rel="stylesheet" type="text/css" />
    <!--
    <script src="../Scripts/jquery-1.3.2.min.js" language="javascript" type="text/javascript" />
    <script src="../Scripts/jquery-ui-1.7.1.custom.min.js" type="text/javascript" />
    -->
    <style>
        .tblFooterFrame
        {
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
        .orttblOutFrame
        {
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .ortdivArea
        {
            width: 600px;
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
    <div class="ortdivArea">
        <table id="ortouterFrame" class="orttblOutFrame" runat="server" border="0" cellspacing="1" cellpadding="1" width="100%">
            <tr>
                <td><b>Orders</b></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>
                    <table id="headerFrame" class="tblHeadFrame" border="0" cellspacing="1" cellpadding="1" width="100%" >
                        <tr>
                            <td width="600px">Customer</td>
                            <td width="200px">
                                <asp:DropDownList ID="ddlCustomer" runat="server" AutoPostBack="false" OnChange="dllCustomer_Changed(this)">
                                </asp:DropDownList>
                            </td>
                        </tr>
                        <tr>
                            <td style="width:250px" nowrap="nowrap" valign="top"><span style ="padding-right:10px">Delivery Date :</span>
                            </td>
                            <td>
                                <input id="txtDeliveryDate" name="txtDeliveryDate" value="8/19/2020" type="text" runat="server" style="width:80px" class="textbox" onkeydown="getFuncKeyForDateCalendar(event, this.name)"/>
                                <a href="javascript:show_calendar('fOrderTaking.txtDeliveryDate',null,'','DD MON YYYY');" style=" text-decoration:none;" onmouseover="window.status='Date Picker';return true;" onmouseout="window.status='';return true;">
                                <img height="20" alt="Calendar" src="Calendar.gif" width="20" align="absMiddle" border="0" ></a>                                                    
                            </td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>
                                <asp:DropDownList ID="ddlStatus" runat="server" AutoPostBack="false" >
                                    <asp:ListItem>New</asp:ListItem>
                                    <asp:ListItem>Completed</asp:ListItem>
                                    <asp:ListItem>Cancelled</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                        </tr>            
                    </table>
                </td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>
                    <asp:Button ID="btnAddItem" runat="server" Text="Add Item" onclick="btnAddItem_Click" />
                </td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Items</td>
            </tr>
            <tr>
                <td>
                    <asp:GridView ID="grvItem" runat="server" AllowPaging="false" AutoGenerateColumns="False" 
                        PageSize="100" Width="100%" ForeColor="#33333"
                        onselectedindexchanged="grvItem_SelectedIndexChanged">
                    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                    <EditRowStyle BackColor="#999999" />
                    <FooterStyle BackColor="#5D7B9D" Font-Bold="true" ForeColor="White" />
                    <HeaderStyle BackColor="#5D7B9D" Font-Bold="true" ForeColor="White" />
                    <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                    <SelectedRowStyle BackColor="#E2DED6" Font-Bold="true" ForeColor="#333333" />
                            <Columns>
                                <asp:BoundField DataField="Name" HeaderStyle-HorizontalAlign="Center" HeaderText="SKU" ItemStyle-HorizontalAlign="Left"/>
                                <asp:BoundField DataField="Quantity" HeaderStyle-HorizontalAlign="Center" HeaderText="Quantity" ItemStyle-HorizontalAlign="Right"/>
                                <asp:BoundField DataField="Price" HeaderStyle-HorizontalAlign="Center" HeaderText="Price" ItemStyle-HorizontalAlign="Right"/>
                            </Columns>
                    </asp:GridView>
                </td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>
                    <table id="footerFrame" class="tblFooterFrame" border="1" cellspacing="1" cellpadding="1" width="100%">
                        <tr>
                            <td width="77%">Total Amount</td>
                            <td align="right">
                                <asp:Label ID="lblTotal" runat="server" style="text-align: right" Text="0.00"></asp:Label>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
