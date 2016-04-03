using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using System.Reflection;

namespace aspnet5.Controllers
{
    [Route("api/[controller]"), Route("/")]
    public class HelloController:Controller
    {
        [Route("[action]"), Route("")]
        public ViewResult GetIndex()
        {
            return View("~/Views/Index");
        }

        [Route("[action]"), Route("q")]
        public string Index2()
        {
             return "greeter.GetGreeting()"+
#if DNX451

             Assembly.GetExecutingAssembly().FullName;
#endif
#if DNXCORE50
             typeof(HelloController).AssemblyQualifiedName+"!!!"; 
#endif
        }
    }
}
