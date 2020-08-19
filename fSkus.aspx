<%@ Page Language="C#" AutoEventWireup="true" CodeFile="fSkus.aspx.cs" Inherits="prjOrder.fSkus" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SKUs</title>
    <link href="../style.css" rel="stylesheet" type="text/css" />
    <style>
        .skutblOutFrame
        {
            border: 1px solid #1C6EA4;
            background-color: #FFFFFF;
            text-align: left;
            border-collapse: collapse;
        }
        .skudivArea
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
    <div class="skudivArea">
        <table id="skuouterFrame" class="skutblOutFrame" runat="server" border="0" cellspacing="1" cellpadding="1" width="100%">
            <tr>
                <td><b>SKUs</b></td>
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
                    <asp:GridView ID="grvSkulist" runat="server" AllowPaging="false" AutoGenerateColumns="False" 
                        PageSize="100" Width="100%" ForeColor="#33333"
                        onselectedindexchanged="grvSkulist_SelectedIndexChanged" >
                    <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                    <EditRowStyle BackColor="#999999" />
                    <FooterStyle BackColor="#5D7B9D" Font-Bold="true" ForeColor="White" />
                    <HeaderStyle BackColor="#5D7B9D" Font-Bold="true" ForeColor="White" />
                    <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                    <SelectedRowStyle BackColor="#E2DED6" Font-Bold="true" ForeColor="#333333" />
                            <Columns>
                                <asp:BoundField DataField="Name" HeaderStyle-HorizontalAlign="Center" HeaderText="Name" ItemStyle-HorizontalAlign="Left"/>
                                <asp:BoundField DataField="Code" HeaderStyle-HorizontalAlign="Center" HeaderText="Code" ItemStyle-HorizontalAlign="Left"/>
                                <asp:BoundField DataField="UnitPrice" HeaderStyle-HorizontalAlign="Center" HeaderText="Unit Price" ItemStyle-HorizontalAlign="Right"/>
                                <asp:BoundField DataField="IsActive" HeaderStyle-HorizontalAlign="Center" HeaderText="IsActive" ItemStyle-HorizontalAlign="Center"/>
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
