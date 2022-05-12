import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InterviewPrep';

  // Modifying each words
  wordsOne = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

  modifiedWords = this.wordsOne.filter( (word, index, arr) => {
    arr[index+1] +=' extra'
    return word.length < 6
  });


  fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

  ngOnInit(): void {
    // console.log(this.modifiedWords, this.wordsOne);
    // // Notice there are three words below length 6, but since they've been modified one is returned
    // // ["spray"]


    // console.log(this.filterItems(this.fruits, 'ap'))  // ['apple', 'grapes']
    // console.log(this.filterItems(this.fruits, 'an'))  // ['banana', 'mango', 'orange']

    // console.log(this.isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
    // console.log(this.isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

  }

  // Check if one array is a subset of another array
  // isSubset = (array1: Array<any>, array2: Array<any>) => array2.every(element => array1.includes(element));

  // filterItems = (arr: Array<any>, query: string) => {
  //   return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // }

}
