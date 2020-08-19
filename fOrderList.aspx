<%@ Page Language="C#" AutoEventWireup="true" CodeFile="fOrderList.aspx.cs" Inherits="prjOrder.fOrderList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Order List</title>
    <link href="../style.css" rel="stylesheet" type="text/css" />
    <style>
        .odrtblOutFrame
        {
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .odrdivArea
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
    <div class="odrdivArea">
        <table id="odrouterFrame" class="odrtblOutFrame" runat="server" border="0" cellspacing="1" cellpadding="1" width="100%">
            <tr>
                <td><b>Orders</b></td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>
                    <asp:Button ID="btnCreateNew" runat="server" Text="Create New" onclick="btnCreateNew_Click" />
                </td>
            </tr>
            <tr>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>
                    <asp:GridView ID="grvOrder" runat="server" AllowPaging="false" AutoGenerateColumns="False" 
                        PageSize="100" Width="100%" ForeColor="#33333"
                        onselectedindexchanged="grvOrder_SelectedIndexChanged" >
                    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                    <EditRowStyle BackColor="#999999" />
                    <FooterStyle BackColor="#5D7B9D" Font-Bold="true" ForeColor="White" />
                    <HeaderStyle BackColor="#5D7B9D" Font-Bold="true" ForeColor="White" />
                    <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                    <SelectedRowStyle BackColor="#E2DED6" Font-Bold="true" ForeColor="#333333" />
                            <Columns>
                                <asp:BoundField DataField="Customer" HeaderStyle-HorizontalAlign="Center" HeaderText="Customer" ItemStyle-HorizontalAlign="Left" />
                                <asp:BoundField DataField="DateOfDelivery" HeaderStyle-HorizontalAlign="Center" HeaderText="Delivery Date" ItemStyle-HorizontalAlign="Right" DataFormatString="{0:d}" HtmlEncode="False"/>
                                <asp:BoundField DataField="Status" HeaderStyle-HorizontalAlign="Center" HeaderText="Status" ItemStyle-HorizontalAlign="Left" />
                                <asp:BoundField DataField="AmountDue" HeaderStyle-HorizontalAlign="Center" HeaderText="Amount Due" ItemStyle-HorizontalAlign="Right"/>
                                <asp:TemplateField>
                                    <ItemTemplate>
                                        <asp:LinkButton ID="lnkEdit" Text="Edit" runat="server" CommandArgument='<%# Eval("ID") %>' OnClick="lnkSelect_Click" />
                                    </ItemTemplate>
                                </asp:TemplateField>
                            </Columns>
                    </asp:GridView>
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
