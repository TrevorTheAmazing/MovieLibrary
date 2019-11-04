using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebAPISample.Controllers
{
    //[Route("api/[Movie]")]
    public class MovieController : ApiController
    {
        //member variables
        ApplicationDbContext db;

        //constructor
        public MovieController()
        {
            db = new ApplicationDbContext();
        }

        //member methods
        // GET api/values
        [HttpGet]
        //public IEnumerable<Movie> Get()
        public IHttpActionResult Get()
        {
            var movies = db.Movies.ToList();
            return Ok(movies);
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            var movie = db.Movies.Find(id);
            
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        // POST api/values
        public void Post([FromBody]Movie value)
        {
            // Create movie in db logic
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
            // Update movie in db logic
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            // Delete movie from db logic
        }
    }

}