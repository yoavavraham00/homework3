let overAllPrice = 0;
function orderPizza() {
  let a = prompt("Hello do you want to order our special hot Pizza yes or no?");
  if (a == "no") {
    alert("you chip luzy...");
  } else if (a == "yes") {
    console.log("1 Pizza on fire ");
    overAllPrice = overAllPrice + 50;
    alert("you just add 1 Pizza");
    alert("your order is " + overAllPrice);
  }
  let b = prompt(
    "do you want some thing extra with your Pizza we have hasha, pickles and tomato?"
  );
  if (b == "hasha") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra Hasha ");
    alert("your order is " + overAllPrice);
    let hasha = prompt(
      "what do want on the other half pickles, tomato or nothing ?"
    );
    if (hasha == "pickles") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra pickles thank you Sir ");
      alert("your order is " + overAllPrice);
    }
    if (hasha == "tomato") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra tomato Thank you Sir ");
      alert("your order is " + overAllPrice);
    } else if (hasha == "nothing") {
      alert("thank you Sir see you in the total");
    }
  }
  if (b == "pickles") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra pickles ");
    alert("your order is " + overAllPrice);
    let pickles = prompt(
      "what do want on the other half hasha, tomato or nothing ?"
    );
    if (pickles == "hasha") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra hasha thank you Sir ");
      alert("your order is " + overAllPrice);
    }
    if (pickles == "tomato") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra tomato Thank you Sir ");
      alert("your order is " + overAllPrice);
    } else if (pickles == "nothing") {
      alert("thank you Sir see you in the total");
    }
  } else if (b == "tomato") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra tomato ");
    alert("your order is " + overAllPrice);
    let tomato = prompt(
      "what do want on the other half hasha, pickles or nothing ?"
    );
    if (tomato == "hasha") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra hasha thank you Sir ");
      alert("your order is " + overAllPrice);
    }
    if (tomato == "pickles") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra pickles Thank you Sir ");
      alert("your order is " + overAllPrice);
    } else if (tomato == "nothing") {
      alert("thank you Sir see you in the total");
    }
  }
}
function addhamburger() {
  let a = prompt("Hello do you want to order our special hamburger yes or no?");
  if (a == "no") {
    alert("you chip luzy...");
  } else if (a == "yes") {
    console.log("1 hamburger on fire ");
    overAllPrice = overAllPrice + 40;
    alert("you just add 1 hamburger");
    alert("your order is " + overAllPrice);
  }
  let b = prompt(
    "do you want some thing extra with your hamburger we have hasha, pickles and tomato?"
  );
  if (b == "hasha") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra Hasha ");
    let hasha = prompt("Only Hasha! you can add pickles, tomato or nothing ?");
    if (hasha == "pickles") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra pickles thank you Sir ");
      alert("your order is " + overAllPrice);
    }
    if (hasha == "tomato") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra tomato Thank you Sir ");
      alert("your order is " + overAllPrice);
    } else if (hasha == "nothing") {
      alert("thank you Sir see you in the total");
    }
  }
  if (b == "pickles") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra pickles ");
    let pickles = prompt(
      "Only pickles! you can add hasha, tomato or nothing ?"
    );
    if (pickles == "hasha") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra hasha thank you Sir ");
      alert("your order is " + overAllPrice);
    }
    if (pickles == "tomato") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra tomato Thank you Sir ");
      alert("your order is " + overAllPrice);
    } else if (pickles == "nothing") {
      alert("thank you Sir see you in the total");
    }
  } else if (b == "tomato") {
    overAllPrice = overAllPrice + 5;
    alert("you just add Extra tomato ");
    let tomato = prompt("Only tomato! you can add hasha, pickles or nothing ?");
    if (tomato == "hasha") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra hasha thank you Sir ");
      alert("your order is " + overAllPrice);
    }
    if (tomato == "pickles") {
      overAllPrice = overAllPrice + 5;
      alert("you just add Extra pickles Thank you Sir ");
    } else if (tomato == "nothing") {
      alert("thank you Sir see you in the total");
    }
  }
}
function addTotal() {
  alert("the price is " + overAllPrice);
}
