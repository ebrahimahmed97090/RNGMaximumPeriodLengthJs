import { Component, OnInit } from '@angular/core';
import * as bigInt from 'big-integer';
import { max } from 'big-integer';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  a;
  ma;
  lists = Array();
  m;
  lens = Array();
  xos = Array();
  c = bigInt(0);
  x = bigInt(1);
  pw = bigInt(1);
  nums = Array();
  ln = false;
  len = bigInt(0);
  pww = () => {
    this.m = bigInt(this.m).pow(this.pw);
  };
  maxln = () => {
    let i;
    if (bigInt(this.x).eq(1)) {
      i = true;
    }
    if (!i) {
      this.calfn(this.x);
      this.ma = Infinity;
    } else if (i) {
      this.ma = 0;
      let z;
      while (!bigInt(this.len).equals(bigInt(this.m).subtract(1))) {
        this.x = bigInt(this.x).next();
        z = this.calfn(this.x);
        if (bigInt(z).gt(this.ma)) {
          this.ma = z;
        }
        if (!bigInt(this.x).lt(this.m)) {
          break;
        }
      }
    }
  }
  calfn = (x) => {
    this.len = bigInt(0);
    this.nums = [];
    this.ln = false;
    this.nums.push(x);
    let fm;
    if (bigInt(this.c).eq(0)) {
      while (bigInt(x).lt(this.m)) {
        if (this.len.eq(0)) {
          this.xos.push(x);
        }
        x = bigInt(this.a).multiply(x).mod(this.m);
        if (this.len.eq(0)) {
          fm = x;

        }
        if (bigInt(x).eq(fm) && this.len.neq(0)) {
          break;
        }
        this.len = bigInt(this.len.next());
        this.nums.push(x);
      }
    } else if (bigInt(this.c).neq(0)) {
      while (bigInt(x).lt(this.m)) {
        console.log(x);
        if (this.len.eq(0)) {
          this.xos.push(x);
        }
        x = ((bigInt(this.a).multiply(x)).plus(this.c)).mod(this.m);
        if (this.len.eq(0)) {
          fm = x;

        }
        if (bigInt(x).eq(fm) && this.len.neq(0)) {
          break;
        }
        this.len = bigInt(this.len.next());
        this.nums.push(x);
      }
    }
    this.ln = true;
    this.lens.push(this.len);
    this.lists.push(this.nums);

    return this.len;
  }
  constructor() {}

  ngOnInit(): void {}
}
