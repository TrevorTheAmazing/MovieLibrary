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

        [HttpPost]
        // POST api/values
        //public void Post(Movie movie)
        public HttpResponseMessage Post([FromBody] Movie movie)
        {
            // Create movie in db logic

            try
            {
                using (var tempDb = new ApplicationDbContext())
                {
                    //tempDb.Movies.Add(new Movie()
                    //{
                    //    MovieId = movie.MovieId,
                    //    Title = movie.Title,
                    //    Director = movie.Director,
                    //    Genre = movie.Genre
                    //});

                    db.Movies.Add(movie);

                    db.SaveChanges();

                    var message = Request.CreateResponse(HttpStatusCode.Created, movie);
                    message.Headers.Location = new Uri(Request.RequestUri + movie.MovieId.ToString());
                    //return Ok(movie.MovieId);
                    return message;
                }
            }
            catch(Exception e)
            {
                //Console.WriteLine(e.Message);
                //return BadRequest();
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, e);
            }
            
            
        }

        // PUT api/values/5
        public IHttpActionResult Put(Movie updatedMovieInformation)
        {
            // Update movie in db logic
            Movie movieFromDatabase = null;

            try
            {
                using (var tempDb = new ApplicationDbContext())
                {


                    movieFromDatabase = db.Movies.Where(c => c.MovieId == updatedMovieInformation.MovieId).SingleOrDefault();

                    movieFromDatabase.Title = updatedMovieInformation.Title;
                    movieFromDatabase.Director = updatedMovieInformation.Director;
                    movieFromDatabase.Genre = updatedMovieInformation.Genre;

                    db.SaveChanges();
                }
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound();
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            // Delete movie from db logic
            try
            {
                var tempMovie = db.Movies.Find(id);
                
                if (tempMovie != null)
                {
                    db.Movies.Remove(tempMovie);
                    db.SaveChanges();
                }
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
            
            

            
        }
    }

}