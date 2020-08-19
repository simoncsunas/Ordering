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
    public partial class fSkusNew : System.Web.UI.Page
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
                        if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "1", ">" + lsID + ">  >  >  >2020-08-15>Admin>01:01:10>Admin>True>", "spSkuList", ref ldt, ref cFL.gsErrorMsg) == 0)
                        {
                            liCount = ldt.Rows.Count;
                            if (liCount > 0)
                            {
                                txtName.Text = ldt.Rows[0][1].ToString();
                                txtCode.Text = ldt.Rows[0][2].ToString();
                                txtUnitPrice.Text = ldt.Rows[0][3].ToString();

                                liAddEdit = 1;
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
            Server.Transfer("~/fSkus.aspx", true);
        }
        protected void btnSave_Click(object sender, EventArgs e)
        {
            bool lbSuccess = false;

            bool lbConn = false;

            string lsConnParam = string.Empty;
            String lsQry = string.Empty;

            DataTable ldt = new DataTable();

            int liCount = 0;

            try
            {
                ConnectionStringSettings settings = System.Configuration.ConfigurationManager.ConnectionStrings["conn"];
                lsConnParam = settings.ConnectionString;

                lbConn = cDB.gfConnect(ref cDB.conSqlTsk, lsConnParam, ref cFL.gsErrorMsg);
                if (lbConn == true)
                {
                    lsID = Request.QueryString["ID"];
                    lsAddEdit = Request.QueryString["AddEdit"];

                    if (lsAddEdit == null) lsAddEdit = "0";
                    if (lsAddEdit == "0")
                    {
                        if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "0", ">1>aaaaa>aaaaa>11>2020-08-15>Admin>01:01:10>Admin>True>", "spSkuList", ref ldt, ref cFL.gsErrorMsg) == 0)
                        {
                            liCount = ldt.Rows.Count;
                            if (ldt.Rows.Count > 0)
                            {
                                liCount += 1;
                            }
                            else liCount = 1;
                        }

                        // Create validate for text entry. 
                        // Create a linq for table handling.
                        lsQry = ">" + liCount.ToString() + ">" +
                                      txtName.Text + ">" +
                                      txtCode.Text + ">" +
                                      txtUnitPrice.Text + "> >Admin> >Admin>True>;";
                        // >1>aaaaa>aaaaa>11>2020-08-15>Admin>01:01:10>Admin>True>
                        if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "2", lsQry, "spSkuList", ref ldt, ref cFL.gsErrorMsg) == 0)
                        {
                            liCount = ldt.Rows.Count;
                            if (ldt.Rows.Count > 0)
                            {
                                lbSuccess = true;
                            }
                        }
                        ldt.Clear();
                    }
                    else if (lsAddEdit == "1")
                    {
                        // create validate for text entry
                        lsQry = ">" + lsID + ">" +
                                      txtName.Text + ">" +
                                      txtCode.Text + ">" +
                                      txtUnitPrice.Text + ">2020-08-15>Admin>01:01:10>Admin>True>;";
                        // >1>aaaaa>aaaaa>11>2020-08-15>Admin>01:01:10>Admin>True>
                        if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "3", lsQry, "spSkuList", ref ldt, ref cFL.gsErrorMsg) == 0)
                        {
                            liCount = ldt.Rows.Count;
                            if (ldt.Rows.Count > 0)
                            {
                                lbSuccess = true;
                            }
                        }
                        ldt.Clear();

                        lbSuccess = true;
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

                if (lbSuccess == true)
                {
                    Server.Transfer("~/fSkus.aspx", true);
                }
            }
        }
    }
}