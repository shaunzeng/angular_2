import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    moduleId:module.id,
    templateUrl:'app.component.html',
})

export class AppComponent{}

var intersection = function(nums1,nums2){
    var newArr = [];

    for (var i  = 0; i<nums1.length; i++ ){
        if (contains(nums2,nums1[i]) && !contains(newArr,nums1[i])){
            newArr.push(nums1[i]);
        }
    }

    return newArr;

    function contains(arr,data){
        if (arr.indexOf(data) < 0){
            return false;
        } else {
            return true;
        }
    }
}

console.log(intersection([1,2,2,3],[2,2]));