using System;

namespace people {
  public class peopleIdentification {
    class LeaderCharacteristics {
      public bool EyeColorGreen = true;
      public bool RedHair;
      public bool WearGlasses;
      public bool doubledLetter;
      // Remember to type the name of Leader in the first input
      public string nameOfLeader = Convert.ToString(Console.ReadLine());
      public bool nameHas2Vowels;
      public bool nameHas3Vowels; 
      public char Vowel = 'a' & 'e' & 'u' & 'o' & 'i';
      // Use this char to support for bool doubledLetter
      public char letter = {
        'a', 'A', 'b', 'B', 'c', 'C',
        'd', 'D', 'e', 'E', 'f', 'F',
        'g', 'G', 'h', 'H', 'i', 'I',
        'j', 'J', 'k', 'K', 'l', 'L',
        'm', 'M', 'n', 'N', 'o', 'O',
        'p', 'P', 'q', 'Q', 'r', 'R',
        's', 'S', 't', 'T', 'u', 'V',
        'w', 'W', 'x', 'X', 'y', 'Y',
        'z', 'Z'
      };
      public string validAnswers = {
        "yes",
        "no",
        "true",
        "false",
        "0",
        "1"
      };
      public static void Proceed(bool VarToProceed) {
        VarToProceed = true;
      }
      public static void CheckBoolRedHair() {
          Console.WriteLine("Specify the correct value of: Does this person have red hair?");
          Console.WriteLine("(Answer by true/false  yes/no  1/0)");
          string answerRedHair = Convert.ToString(Console.ReadLine());
          static void checkAnswerRedHair() {
            if (answerRedHair = "true" || "1" || "yes") {
              Proceed(RedHair);
              return override answerRedHair == true;
            }
            if (answerRedHair == "false" || "0" || "no") {
              return answerRedHair = false;
            }
          }
          checkAnswerRedHair();
          if (answerRedHair != validAnswers) {
            throw new ArgumentOutOfRangeException("You should type valid answers, ", answerRedHair, "is not valid");
          }
        }
      }
      public static void assignValueFirstBool_SecondBool(bool bool1, bool bool2) {
            if (bool1 == true) {
              return bool2 = true;
            } else {
              return bool2 = false;
            }
          }
      public static void CheckBoolWearGlasses() {
          Console.WriteLine("Specify the correct value of: Does this person wear glasses?");
          Console.WriteLine("(Answer by true/false  yes/no  1/0)");
          answerWearGlasses = Console.ReadLine();
          static void checkAnswerWearGlasses() {
            if (answerWearGlasses == "true" || "1" || "yes") {
              return WearGlasses = true;
            }
            if (answerWearGlasses == "false" || "0" || "no") {
              return WearGlasses = false;
            }
          }
          checkAnswerWearGlasses();
          if (answerWearGlasses != validAnswers) {
            throw new ArgumentOutOfRangeException("You should type valid answers, ", answerWearGlasses, "is not valid");
          }
        }
        public static void Main(string[] args) {
          CheckBoolWearGlasses();
          CheckBoolRedHair();
        }


      }
}

namespace PersonForm {
  public class Code {
    
  }
}