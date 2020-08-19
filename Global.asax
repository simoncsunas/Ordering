<%@ Application Language="C#" %>

<script runat="server">

    //protected void Application_BeginRequest(Object sender, EventArgs e)
    //{
    //    if (HttpContext.Current.Request.IsSecureConnection.Equals(false) && HttpContext.Current.IsLocal.Equals(false))
    //    {
    //        Response.Redirect("https://" + Request.ServerVariables["HTTP_HOST"] + HttpContext.Current.Request.RawUrl)
    //    }
    //}
    
    void Application_Start(object sender, EventArgs e) 
    {
        // Code that runs on application startup
        // Validate Windows, MAC, Linux and Unix version
        // Validate IE, Chrome and FireFox
    }
    void Application_End(object sender, EventArgs e) 
    {
        //  Code that runs on application shutdown

    }
    void Application_Error(object sender, EventArgs e) 
    { 
        // Code that runs when an unhandled error occurs

    }

    void Session_Start(object sender, EventArgs e) 
    {
        // Code that runs when a new session is started
        Response.Redirect("~/Default.aspx");
    }
    void Session_End(object sender, EventArgs e) 
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }
    
</script>
