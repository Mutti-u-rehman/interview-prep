import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  password: string = 'Ab1';
  constructor() { }

  ngOnInit(): void {

    // const pass = this.password.split('');
    // let check = { isDigit: false, isSpecial: false, isLow: false, isUpper: false };
    // for (let e of pass) {
    //     if ("0123456789".includes(e) && !check.isDigit) check.isDigit = true;
    //     if ("abcdefghijklmnopqrstuvwxyz".includes(e) && !check.isLow) check.isLow = true;
    //     if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(e) && !check.isUpper) check.isUpper = true;
    //     if ("!@#$%^&*()-+".includes(e) && !check.isSpecial) check.isSpecial = true;
    // }

    // let chars = 0;
    // if (!check.isDigit) chars++;
    // if (!check.isSpecial) chars++;
    // if (!check.isLow) chars++;
    // if (!check.isUpper) chars++;

    // console.log(chars);
    let p = [6, 5, 8, 4, 7, 10, 9];
    let remove = [];
    let flag = true;
    let haveChange = false;
    let i = 0;
    let days = 0;
    if (p.length === 1) console.log(days);
    else
    debugger
        {
            do {
                if (p[i]<p[i+1]) {
                    // p.splice(i+1,1);
                    remove.push(i+1);
                    haveChange = true;
                  }

                  if (i === p.length-1 && haveChange)
                  {
                    remove.reverse().forEach(e => {
                      p.splice(e,1);
                    });

                    days++;
                    remove = [];
                    i=-1;
                    haveChange = false;
                  }
                  else if (i === p.length-1) {
                    flag = false;
                  }

                  i++;
                console.log(p, i);
            }while(p.length>2 && flag);

            console.log(days);
        }
  }

}
