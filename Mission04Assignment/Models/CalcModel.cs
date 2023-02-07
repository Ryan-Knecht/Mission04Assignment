using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

//This is the models page
namespace Mission04Assignment.Models
{
    //Create a model with a required field, a range, and  getters/setters
    public class CalcModel
    {
        [Required]
        [Range(0,100,ErrorMessage = "Must input a valid number between 0-100.")]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Must input a valid number between 0-100.")]
        public int Group { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Must input a valid number between 0-100.")]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Must input a valid number between 0-100.")]
        public int Midterm { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Must input a valid number between 0-100.")]
        public int Final { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Must input a valid number between 0-100.")]
        public int Intex { get; set; }

    }
}
