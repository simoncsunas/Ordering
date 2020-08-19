using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

using System.Text;

namespace prjOrder
{
    public partial class fOrderTaking : System.Web.UI.Page
    {
        int liAddEdit = 0;

        string lsID = string.Empty;
        string lsAddEdit = string.Empty;

        protected void Page_Load(object sender, EventArgs e)
        {
            bool lbConn = false;

            string lsConnParam = string.Empty;
            string lsQry = string.Empty;

            DataTable ldt = new DataTable();
            DataTable ldtCustomer = new DataTable();

            int liCount = 0;

            try
            {
                if (!IsPostBack)
                {
                    lsID = Request.QueryString["ID"];
                    lsAddEdit = Request.QueryString["AddEdit"];

                    liAddEdit = 0;

                    ConnectionStringSettings settings = System.Configuration.ConfigurationManager.ConnectionStrings["conn"];
                    lsConnParam = settings.ConnectionString;

                    lbConn = cDB.gfConnect(ref cDB.conSqlTsk, lsConnParam, ref cFL.gsErrorMsg);
                    if (lbConn == true)
                    {
                        if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "0", ">1>aaaaa>bbbbb>aaaaa, bbbbb>12345689>Pasig>2020-08-15>Admin>01:01:10>Admin>True>", "spCustomerList", ref ldtCustomer, ref cFL.gsErrorMsg) == 0)
                        {
                            liCount = ldtCustomer.Rows.Count;
                            if (ldtCustomer.Rows.Count > 0)
                            {
                                ddlCustomer.DataSource = ldtCustomer;
                                ddlCustomer.DataBind();
                                ddlCustomer.DataTextField = "FullName";
                                ddlCustomer.DataValueField = "ID";
                                ddlCustomer.DataBind();
                            }
                        }
                        
                        ((HtmlControl)(form1.FindControl("txtDeliveryDate"))).Attributes["src"] = DateTime.Now.ToString("dd MM, yyyy");

                        if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "0", ">1>1>1>  >  >01:01:10>Admin>", "spItemList", ref ldt, ref cFL.gsErrorMsg) == 0)
                        {
                            liCount = ldt.Rows.Count;
                            if (ldt.Rows.Count > 0)
                            {
                                grvItem.DataSource = ldt;
                                grvItem.DataBind();
                            }
                        }

                        ((HtmlControl)(form1.FindControl("lblTotal"))).Attributes["src"] = "1,000.00";

                    }
                }
            }
            catch (Exception ex)
            {
                cFL.gsWriteToFile(cFL.gsLogPathFile, ex.Message, ref cFL.gsErrorMsg);
            }
            finally
            {
                if (lbConn == true) cDB.gfDisconnect(ref cDB.conSqlTsk, ref cFL.gsErrorMsg);
            }
        }

        protected void grvItem_SelectedIndexChanged(object sender, EventArgs e)
        {
            //
        }
        
        protected void btnAddItem_Click(object sender, EventArgs e)
        {
            Server.Transfer("~/fAddItem.aspx", true);
        }
}
}