using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;
using System.Xml.Linq;
using System.Xml.XPath;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Jobbuppgift
{
    /// <summary>
    /// Summary description for JobbWebService
    /// </summary>
    [WebService(Namespace = "Jobbuppgift")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class JobbWebService : System.Web.Services.WebService
    {
        [WebMethod]
        public string AddBook(string title)
        {

            XDocument xDoc;
            xDoc = XDocument.Load("C:\\Users\\Julius\\source\\repos\\ConsoleApp1\\ConsoleApp1\\books.xml");

            var msg = "";
            var xmlNodeExist = "catalog/book/title";
            var CustNoExist = xDoc.XPathSelectElements(xmlNodeExist).FirstOrDefault(x => (string)x == title);
            if (CustNoExist != null)
            {
                msg = "The title: " + title + " is already added to the xml";
                return msg;
            }

            if (CustNoExist == null)
            {
                var newElement = new XElement("book",
                                   new XElement("title", "" + title + ""));
                xDoc.Element("catalog").Add(newElement);

                xDoc.Save("C:\\Users\\Julius\\source\\repos\\ConsoleApp1\\ConsoleApp1\\books.xml");
                msg = "";
                return msg;
            }
            msg = "Something went wrong :(";
            return msg;
        }

        [WebMethod]
        public List<Book> getTitle(string title)
        {
            if (title == "")
            {
                return null;
            }

            XDocument xDoc;
            xDoc = XDocument.Load("C:\\Users\\Julius\\source\\repos\\ConsoleApp1\\ConsoleApp1\\books.xml");
            var result = (from q in xDoc.Descendants("catalog").Elements("book")
                          where q.Elements("title").Any(filter => ((string)q.Element("title")).Contains(title))
                          select new Book
                          {
                              Title = (string)q.Element("title")
                          }).ToList();

            return result;
        }
        [WebMethod]
        public void getTitleJSON(string title)
        {

            XDocument xDoc;
            xDoc = XDocument.Load("C:\\Users\\Julius\\source\\repos\\ConsoleApp1\\ConsoleApp1\\books.xml");

            var result = (from q in xDoc.Descendants("catalog").Elements("book")
                          where q.Elements("title").Any(filter => ((string)q.Element("title")).Contains(title))
                          select new Book
                          {
                              Title = (string)q.Element("title")
                          }).ToList();

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(result));
        }

        public class Book
        {
            public string Title { get; set; }
        }
    }
}


//           public List<Book> getTitle(string title)
//        {

//            if (title == "")
//            {
//                return null;
//            }

//            XDocument xDoc;
//            xDoc = XDocument.Load("C:\\Users\\Julius\\source\\repos\\ConsoleApp1\\ConsoleApp1\\books.xml");
//            var result = (from q in xDoc.Descendants("catalog").Elements("book")
//                          where q.Elements("title").Any(filter => ((string)q.Element("title")).Contains(title))
//                          select new Book
//                          {
//                              Title = (string)q.Element("title")
//                          }).ToList();

//            return result;
//        }
//        public class Book
//        {
//            public string Title { get; set; }
//        }
//    }
//}