using Microsoft.AspNetCore.Mvc;
using Mission04Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04Assignment.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            //throw new IndexOutOfRangeException();

            return View();
        }


        //Overload the GradeCalc() function
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalc (CalcModel model)
        {
            return View();
        }
    }
}
