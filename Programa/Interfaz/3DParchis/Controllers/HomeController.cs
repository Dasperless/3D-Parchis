using _3DParchis.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace _3DParchis.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Inicio()
        {
            return View();
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}

        public IActionResult NuevoJuego()
        {
            return View();
        }

        public IActionResult UnirseJuego()
        {
            return View();
        }

        public IActionResult VerRanking()
        {
            return View();
        }

        public IActionResult VerEstadistica()
        {
            return View();
        }

        public IActionResult Juego()
        {
            return View();
        }
    }
}
