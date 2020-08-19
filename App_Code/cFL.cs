
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
// add-in
using System.IO;
using System.Drawing;

namespace prjOrder
{
    public class cFL
    {
        public static string gsLogPathFile = "C:\\_CSH\\sORDER\\log.txt";

        public static string gsErrorMsg = string.Empty;

#region file_control
        public static bool gfFileCopy(string pSource, string pTarget, ref string pErrorMsg)
        {
            try
            {
                if (File.Exists(pSource) == true)
                {
                    File.Copy(pSource, pTarget, true);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfFileMove(string pSource, string pTargetPath, ref string pErrorMsg)
        {
            try
            {
                if (File.Exists(pSource) == true)
                {
                    File.Move(pSource, pTargetPath);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfFileCreate(string pSource, ref string pErrorMsg)
        {
            try
            {
                if (File.Exists(pSource) == true)
                {
                    File.CreateText(pSource);
                    
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfFileCreateB(string pSource, ref string pErrorMsg)
        {
            try
            {
                if (File.Exists(pSource) == false)
                {
                    File.Create(pSource);

                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfFileCreateC(string pSource, ref string pErrorMsg)
        {
            try
            {
                if (File.Exists(pSource) == false)
                {
                    FileStream fs = null;
                    using(fs = File.Create(pSource))
                    {
                        //
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfFileCreateD(string pSource, ref string pErrorMsg)
        {
            try
            {
                if (File.Exists(pSource) == false)
                {
                    File.AppendText(pSource);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfFileDelete(string pSource, ref string pErrorMsg)
        {
            try
            {
                if (File.Exists(pSource) == true)
                {
                    File.Delete(pSource);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }

        public static bool gfFileInfoDelete(string pSource, ref string pErrorMsg)
        {
            if (File.Exists(pSource) == true)
            {
                File.Delete(pSource);
            }
            FileInfo files = new FileInfo(@pSource);

            try
            {
                files.Delete();

                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfFileFastDelete(string pSourcePath, string pCriteria, ref string pErrorMsg)
        {
            // delete 1103 in 2266 number of zip files
            try
            {
                var files = from f in Directory.GetFiles(pSourcePath)
                            where Path.GetExtension(f) != pCriteria
                            select f;
                foreach (string file in files)
                    File.Delete(file);

                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfFileSingleDelete(string pSourcePath, string pCriteria, ref string pErrorMsg)
        {
            try
            {

                pSourcePath = pSourcePath + "\\";
                string[] files = Directory.GetFiles(pSourcePath, pCriteria);
                foreach (string file in files)
                {
                    string fileToDelete = Path.GetFileName(file);
                    File.Delete(pSourcePath + fileToDelete);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
#endregion

#region directory_control
        public static bool gfDirectoryCreate(string pSource, ref string pErrorMsg)
        {
            try
            {
                if (Directory.Exists(pSource) == false)
                {
                    Directory.CreateDirectory(pSource);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfDirectoryDelete(string pSource, ref string pErrorMsg)
        {
            try
            {
                if (Directory.Exists(pSource) == true)
                {
                    Directory.Delete(pSource);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfDirectoryDeleteAllSub(string pSource, ref string pErrorMsg)
        {
            try
            {
                if (Directory.Exists(pSource) == true)
                {
                    Directory.Delete(pSource, false);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
        public static bool gfDirectoryInfoDeleteAllSub(string pSource, ref string pErrorMsg)
        {
            DirectoryInfo dir = new DirectoryInfo(pSource);
            try
            {
                if (Directory.Exists(pSource) == true)
                {
                    dir.Delete(true);
                }
                return true;
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return false;
            }
        }
#endregion

#region create_write_to_file_control
        public static void gsAppendAllText(string pFilePath, string pMsg, ref string pErrorMsg)
        {
            try
            {
                File.AppendAllText(pFilePath, pMsg);
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return;
            }
        }
        
        public static void gsWriteAllText(string pFilePath, string pMsg, ref string pErrorMsg)
        {
            try
            {
                File.WriteAllText(pFilePath, pMsg);
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return;
            }
        }
        public static void gsWriteAllBytes(string pFilePath, byte[] pMsg, ref string pErrorMsg)
        {
            try
            {

                File.WriteAllBytes(pFilePath, pMsg);

            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return;
            }
        }
        public static void gsWriteAllLines(string pFilePath, string[] pMsg, ref string pErrorMsg)
        {
            try
            {

                File.WriteAllLines(pFilePath, pMsg);

            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return;
            }
        }
        public static void gsWriteToFile(string pFilePath, string pMsg, ref string pErrorMsg)
        {
            try
            {
                using(StreamWriter sws = new StreamWriter(pFilePath, true))
                { 
                    sws.WriteLine(pMsg);
                }
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
            }
            finally
            {
                //sws.Close();
                //sws.Dispose();
            }
        }
        public static void gsWriteToFileA(string pFilePath, string pMsg, ref string pErrorMsg)
        {
            try
            {
                using (StreamWriter sws = new StreamWriter(pFilePath, true))
                {
                    sws.WriteLine(pMsg);
                    sws.Close();
                }
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
                return;
            }
        }
        
        public static void gfLog(string psPathFile, string pUser, string pMsg, ref string pErrorMsg)
        {
            try
            {
                using (StreamWriter swWriter = File.AppendText(psPathFile))
                {
                    subLog(pMsg, swWriter);
                }
            }
            catch (Exception ex)
            {
                pErrorMsg = ex.Message;
            }
        }
        public static void subLog(string psHandler, TextWriter swWriter)
        {
            swWriter.WriteLine(psHandler);

            // Neomorph effect using HTML, CSS AND JavaScript

            // Programmer Analysts
            // jmhilado@eastwestbanker.com

            // sl.siazar@talentavenue.ph

            // SR Production Data Input Associate
            // maria.jallores@nezdaglobal.com

            // Programmer
            // Teledata (Teledatacom Phils. Inc.)

            // Programmer
            // mjremoquillo@stratnet.ph

            //Johnson Controls
            //Transportation Data Analyst (remote)
            // VBA
            //us: simoncsunas@gmail.com
            //ps: MaFe12345!@#

            //ryder.wd5.m
            // COOP Data Analyst
            //us: simoncsunas@gmail.com
            //ps: MaFe12345!@#

            //dchs.hirescore.com
            //DICKINSON COUNTRY HEALCARE SYSTEM DCH
        }
#endregion

    }
}
