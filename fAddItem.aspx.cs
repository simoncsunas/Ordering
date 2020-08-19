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

namespace prjOrder
{
    public partial class fAddItem : System.Web.UI.Page
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
                        if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "0", ">1>Scotch Brite 10cm>SB100>75.00>2020-08-15>Admin>01:01:10>Admin>True>", "spSkuList", ref ldt, ref cFL.gsErrorMsg) == 0)
                        {
                            liCount = ldt.Rows.Count;
                            if (ldt.Rows.Count > 0)
                            {
                                ddlSku.DataSource = ldt;
                                ddlSku.DataBind();
                                ddlSku.DataTextField = "Name";
                                ddlSku.DataValueField = "ID";
                                ddlSku.DataBind();
                            }
                        }
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

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            Server.Transfer("~/fOrderTaking.aspx", true);
        }
        protected void btnAdd_Click(object sender, EventArgs e)
        {
            bool lbSuccess = false;

            bool lbConn = false;

            string lsConnParam = string.Empty;

            DataTable ldt = new DataTable();

            try
            {
                ConnectionStringSettings settings = System.Configuration.ConfigurationManager.ConnectionStrings["conn"];
                lsConnParam = settings.ConnectionString;

                lbConn = cDB.gfConnect(ref cDB.conSqlTsk, lsConnParam, ref cFL.gsErrorMsg);
                if (lbConn == true)
                {

                    //String lsValue = txtSKU.Text + "," + txtQuantity.Text + "," + txtPrice.Text;

                    //if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "2", lsValue, "spItemList", ref ldt, ref cFL.gsErrorMsg) == 0)
                    //{
                    //    liCount = ldt.Rows.Count;
                    //    if (ldt.Rows.Count > 0)
                    //    {
                    //        lbSuccess = true;
                    //    }
                    //}
                }
            }
            catch (Exception ex)
            {
                cFL.gsWriteToFile(cFL.gsLogPathFile, ex.Message, ref cFL.gsErrorMsg);
            }
            finally
            {
                if (lbConn == true) cDB.gfDisconnect(ref cDB.conSqlTsk, ref cFL.gsErrorMsg);

                if (lbSuccess == true)
                {
                    Server.Transfer("~/fCustomer.aspx", true);
                }
            }
        }
    }
}