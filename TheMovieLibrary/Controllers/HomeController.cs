using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TheMovieLibrary.Controllers
{
    public class HomeController : Controller
    {
        Applicationdbcontext db;
        public HomeController()
        {
            db = new Applicationdb();
        }
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
