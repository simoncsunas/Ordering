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
    public partial class fCustomer : System.Web.UI.Page
    {
        string lsID = string.Empty;

        protected void Page_Load(object sender, EventArgs e)
        {
            bool lbConn = false;

            string lsConnParam = string.Empty;

            DataTable ldt = new DataTable();
                
            int liCount = 0;

            try
            {
                if (!IsPostBack)
                {
                    ConnectionStringSettings settings = System.Configuration.ConfigurationManager.ConnectionStrings["conn"];
                    lsConnParam = settings.ConnectionString;

                    lbConn = cDB.gfConnect(ref cDB.conSqlTsk, lsConnParam, ref cFL.gsErrorMsg);
                    if (lbConn == true)
                    {
                        if (cDB.gfGetRowPmeter(cDB.conSqlTsk, "0", ">1>aaaaa>bbbbb>aaaaa, bbbbb>12345689>Pasig>2020-08-15>Admin>01:01:10>Admin>True>", "spCustomerList", ref ldt, ref cFL.gsErrorMsg) == 0)
                        {
                            liCount = ldt.Rows.Count;
                            if (ldt.Rows.Count > 0)
                            {
                                grvCustomer.DataSource = ldt;
                                grvCustomer.DataBind();
                            }
                        }
                        ldt.Clear();
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

        protected void lnkSelect_Click(object sender, EventArgs e)
        {
            try
            {
                lsID = Convert.ToString((sender as LinkButton).CommandArgument);

                Response.Redirect("fCustomerNew.aspx?ID=" + lsID.ToString() +"&AddEdit=1");
                //Session["ID"] = ID.ToString();
            }
            catch (Exception ex)
            {
                cFL.gsWriteToFile(cFL.gsLogPathFile, ex.Message, ref cFL.gsErrorMsg);
            }
            finally
            {
                // if (lbConn == true) cDB.gfDisconnect(ref cDB.conSqlTsk, ref cFL.gsErrorMsg);
            }
        }

        protected void grvCustomer_SelectedIndexChanged(object sender, EventArgs e)
        {
            //
        }

        protected void btnCreateNew_Click(object sender, EventArgs e)
        {
            Server.Transfer("~/fCustomerNew.aspx", true);
        }
    }
}
