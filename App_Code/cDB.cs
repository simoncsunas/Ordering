using System;
using System.Data;
using System.Configuration;
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

/// <summary>
/// Summary description for cDB
/// </summary>
namespace prjOrder
{
    public class cDB
    {
        public static SqlConnection conSqlTsk = null;

        //
        // TODO: Add constructor logic here
        //
        public static bool gfConnect(ref SqlConnection pConn, string pParameter, ref string psErrorMsg)
        {
            SqlConnection tempConn = new SqlConnection(pParameter);
            try
            {
                tempConn.Open();
                pConn = tempConn;
                return true;
            }
            catch (Exception ex)
            {
                tempConn.Close();
                psErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfDisconnect(ref SqlConnection pConn, ref string psErrorMsg)
        {
            try
            {
                if (pConn.State == ConnectionState.Open) pConn.Close();
                return true;
            }
            catch (Exception ex)
            {
                psErrorMsg = ex.Message;
                return false;
            }
        }

        public static Int32 gfExecute(SqlConnection pConn, string pQry, Int32 pTimeOut, bool pEnabledMsg, ref string psErrorMsg)
        {
            int liReturn;
            try
            {
                using (SqlCommand cmd = new SqlCommand(pQry, pConn))
                {
                    cmd.CommandType = CommandType.Text;
                    if (!pTimeOut.Equals(30)) cmd.CommandTimeout = pTimeOut;
                    liReturn = cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                psErrorMsg = ex.Message;
                return 1;
            }

            return 0;

        }

        public static string gfGetData(SqlConnection pConn, string pQry, bool pReturnMsg, ref string psErrorMsg)
        {
            try
            {

                string lsReturn;

                using (SqlCommand cmd = new SqlCommand(pQry, pConn))
                {

                    cmd.CommandType = CommandType.Text;

                    lsReturn = (string)cmd.ExecuteScalar();

                    if (lsReturn == null)
                    {
                        return "0";
                    }
                    else
                    {
                        return "1" + lsReturn.ToString().Trim();
                    }
                }
            }
            catch (Exception ex)
            {
                psErrorMsg = ex.Message;
                return "x";
            }
        }
        public static string gfGetField(SqlConnection pConn, string pQry, bool pReturnMsg, ref string psErrorMsg)
        {
            try
            {
                string lsReturn = "0";
                using (SqlCommand cmd = new SqlCommand(pQry, pConn))
                {
                    cmd.CommandText = pQry;
                    using (SqlDataReader lreader = cmd.ExecuteReader())
                    {
                        if (lreader.HasRows)
                        {
                            while (lreader.Read())
                            {
                                lsReturn = "1" + lreader[0].ToString();
                            }
                        }
                        lreader.Close();
                    }
                }
                return lsReturn;
            }
            catch (Exception ex)
            {
                psErrorMsg = ex.Message;
                return "x";
            }
        }
        public static Int32 gfGetRows(SqlConnection pConn, string pQry, ref DataTable pArrObj, ref string psErrorMsg)
        {
            try
            {
                using (SqlCommand cmd = new SqlCommand(pQry, pConn))
                {
                    cmd.CommandType = CommandType.Text;
                    pArrObj.Load(cmd.ExecuteReader());
                }
                return 0;
            }
            catch (Exception ex)
            {
                psErrorMsg = ex.Message;
                return 1;
            }
        }

        public static Int32 gfGetRowPmeter(SqlConnection pConn, string pAction, string pValue, string pQry, ref DataTable pArrObj, ref string psErrorMsg)
        {
            SqlCommand cmd = new SqlCommand();

            try
            {
                DataTable table = new DataTable();
                SqlDataReader reader;

                cmd.Connection = pConn;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = pQry;
                SqlParameter pParam1 = new SqlParameter();
                pParam1.ParameterName = "@pcAction";
                pParam1.Value = pAction;
                pParam1.DbType = DbType.String;
                cmd.Parameters.Add(pParam1);
                SqlParameter pParam2 = new SqlParameter();
                pParam2.ParameterName = "@psValue";
                pParam2.Value = pValue;
                pParam2.DbType = DbType.String;
                //pParam2.Size = 1000;
                cmd.Parameters.Add(pParam2);
                reader = cmd.ExecuteReader();

                pArrObj.Load(reader);

                return 0;
            }
            catch (Exception ex)
            {
                psErrorMsg = ex.Message;
                return 1;
            }
        }

        public static Int32 gfGetRowCustomer(SqlConnection pConn, string pAction, 
                                                                  string psID, string psFirstName, string psLastName, string psFullName,
                                                                  string psMobileNumber, string psCity, Boolean psIsActive,
                                                                  string pQry, ref DataTable pArrObj, ref string psErrorMsg)
        {
            SqlCommand cmd = new SqlCommand();

            try
            {
                SqlDataReader reader;

                cmd.Connection = pConn;
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = pQry;

                SqlParameter pParam1 = new SqlParameter();
                pParam1.ParameterName = "@pcAction";
                pParam1.Value = pAction;
                pParam1.DbType = DbType.String;
                cmd.Parameters.Add(pParam1);
                
                SqlParameter pParam2 = new SqlParameter();
                pParam2.ParameterName = "@lsID";
                pParam2.Value = psID;
                pParam2.DbType = DbType.String;
                cmd.Parameters.Add(pParam2);

                SqlParameter pParam3 = new SqlParameter();
                pParam2.ParameterName = "@lsFirstName";
                pParam2.Value = psFirstName;
                pParam2.DbType = DbType.String;
                cmd.Parameters.Add(pParam3);

                SqlParameter pParam4 = new SqlParameter();
                pParam2.ParameterName = "@lsLastName";
                pParam2.Value = psLastName;
                pParam2.DbType = DbType.String;
                cmd.Parameters.Add(pParam4);

                SqlParameter pParam5 = new SqlParameter();
                pParam2.ParameterName = "@lsFullName";
                pParam2.Value = psFullName;
                pParam2.DbType = DbType.String;
                cmd.Parameters.Add(pParam5);

                SqlParameter pParam6 = new SqlParameter();
                pParam2.ParameterName = "@lsMobileNumber";
                pParam2.Value = psMobileNumber;
                pParam2.DbType = DbType.String;
                cmd.Parameters.Add(pParam6);

                SqlParameter pParam7 = new SqlParameter();
                pParam2.ParameterName = "@lsCity";
                pParam2.Value = psCity;
                pParam2.DbType = DbType.String;
                cmd.Parameters.Add(pParam7);

                SqlParameter pParam8 = new SqlParameter();
                pParam2.ParameterName = "@lsIsActive";
                pParam2.Value = psIsActive;
                pParam2.DbType = DbType.Boolean;
                cmd.Parameters.Add(pParam8);

                reader = cmd.ExecuteReader();

                pArrObj.Load(reader);

                return 0;
            }
            catch (Exception ex)
            {
                psErrorMsg = ex.Message;
                return 1;
            }
        }
    }
}