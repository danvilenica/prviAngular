using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PrviAngular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PrviAngular.Controllers
{
    [Route("api/[controller]")]
    public class PersonsController : Controller
    {
        private static List<Person> lista;
        public static List<Person> GetList()
        {
            if (lista == null)
            {                
                lista = new List<Person>();
                
                Person p = new Person(1, "Alen");
                Person p1 = new Person(2, "Danijel");
                Person p2 = new Person(3, "Suncica");
                Person p3 = new Person(4, "Lovro");

                lista.Add(p);
                lista.Add(p1);
                lista.Add(p2);
                lista.Add(p3);                
            }

            return lista;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Json(GetList());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {            
            return Json(GetList().Find(person => person.Id == id));
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Person p)
        {
            int index = GetList().Count+1;
            GetList().Add(new Person(index, p.Name));
            return Ok();
        }

        // PUT api/values/5
        [HttpPut]
        public IActionResult Put([FromBody]Person p)
        {
            GetList().Find(person => person.Id == p.Id).Name = p.Name;
            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            GetList().RemoveAll(person => person.Id == id);
            return Ok();
        }
    }
}
