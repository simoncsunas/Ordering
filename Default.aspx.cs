//Created by : Simon C. Suñas
//Date       : August 11, 2020
//Purpose    : Examinatin Project
//Description: Customer Listing

using System;
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

using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Text;
using System.Data.SqlClient;
using System.Data.Common;

namespace prjOrder
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            bool lbConn = false;
            
            string lsConnParam = string.Empty;

            try
            {
                if (!IsPostBack)
                {
                    ConnectionStringSettings settings = System.Configuration.ConfigurationManager.ConnectionStrings["conn"];
                    lsConnParam = settings.ConnectionString;

                    lbConn = cDB.gfConnect(ref cDB.conSqlTsk, lsConnParam, ref cFL.gsErrorMsg);
                    if (lbConn == true)
                    {
                        lblMessage.Text = "Successfully connected.";
                    }
                    else
                    {
                        lblMessage.Text = "Failed to connect.";
                    }

                    this.ifrm.Attributes.Add("src", "fCustomer.aspx");

                }
                // ((HtmlControl)(form1.FindControl("ifrm"))).Attributes["src"] = "fCustomer.aspx";
                // ((HtmlControl)(form1.FindControl("ifrm"))).Attributes["src"] = "fSkus.aspx";
                // ((HtmlControl)(form1.FindControl("ifrm"))).Attributes["src"] = "fOderList.aspx";
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
    }
}