var nums = [7, 2, 9, 15];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var numsCopy = nums.slice();
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            var index = nums.indexOf(target);
            indexArr.unshift(index);
            return indexArr;
        } else {
            numsCopy.sort(function (a, b) {
                // var a=nums[i];
                var sum = a + b;
                if (sum == target) {
                    var index = nums.indexOf(a);
                    indexArr.unshift(index);
                    index = nums.indexOf(b);
                    indexArr.unshift(index);
                    // console.log(indexArr);
                }
            });
            return indexArr;
        }
    }
}

twoSum(nums, target);







var nums = [15, 2, 7];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.unshift(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();
    numsCopy.sort(function (a, b) {
        var sum = a + b;
        if (sum == target) {
            var index = nums.indexOf(a);
            indexArr.unshift(index);
            index = nums.indexOf(b);
            indexArr.unshift(index);
        }
    });
    return indexArr;
}

twoSum(nums, target);










var nums = [15, 2, 7];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.unshift(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();

    numsCopy.sort(function (a, b) {
        for (var i = 0; i < nums.length; i++) {
            var a = nums[i];
            var sum = a + b;
            if (sum == target) {
                var index = nums.indexOf(a);
                indexArr.unshift(index);
                index = nums.indexOf(b);
                indexArr.unshift(index);
            }
        }
    });
    return indexArr;
}

twoSum(nums, target);










var nums = [2, 7, 11, 15];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.push(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();

    numsCopy.sort(function (a, b) {
        for (var i = 0; i < nums.length; i++) {
            var a = nums[i];
            var sum = a + b;
            if (sum == target) {
                var index = nums.indexOf(a);
                indexArr.push(index);
                index = nums.indexOf(b);
                indexArr.push(index);
                console.log(indexArr);
            }
            return;
        }
    });
}

twoSum(nums, target);












var nums = [2, 7, 11, 15];
var target = 9;
var indexArr = [];

function unique(indexArr) {

}


var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.push(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();
    numsCopy.sort(function (a, b) {
        for (var i = 0; i < nums.length; i++) {
            var a = nums[i];
            var sum = a + b;
            if (sum == target) {
                var index = nums.indexOf(a);
                indexArr.unshift(index);
                index = nums.indexOf(b);
                indexArr.unshift(index);
                return indexArr;
            }
            //     			return;
        }
    });
    var obj = [];
    for (var i = 0; i < indexArr.length; i++) {
        var str = indexArr[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

twoSum(nums, target);





var nums = [2, 7, 11, 15];
var target = 9;
var indexArr = [];
var arrry = [];

function unique(indexArr) {

}


var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.push(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();
    numsCopy.sort(function (a, b) {
        for (var i = 0; i < nums.length; i++) {
            var a = nums[i];
            var sum = a + b;
            if (sum == target) {
                var index = nums.indexOf(a);
                indexArr.unshift(index);
                index = nums.indexOf(b);
                indexArr.unshift(index);
                return indexArr;
            }
            //     			return;
        }
    });
    var obj = [];
    for (var i = 0; i < indexArr.length; i++) {
        var str = + indexArr[i];
        obj[str] = true;
    }
    var arrNew = Object.keys(obj);
    for (var i = 0; i < arrNew.length; i++) {
        var nummmmb = +arrNew[i];
        arrry.push(nummmmb);
    }
    return arrry;
}

twoSum(nums, target);












var nums = [3, 2, 7, 89];
var target = 9;
var indexArr = [];
var numArr = [];

var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.push(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();
    numsCopy.sort(function (a, b) {
        for (var i = 0; i < nums.length; i++) {
            var a = nums[i];
            var sum = a + b;
            if (sum == target) {
                var index = nums.indexOf(a);
                indexArr.unshift(index);
                index = nums.indexOf(b);
                indexArr.unshift(index);
                return indexArr;
            }
        }
    });
    var obj = [];
    for (var i = 0; i < indexArr.length; i++) {
        var str = + indexArr[i];
        obj[str] = true;
    }
    var arrNew = Object.keys(obj);
    for (var i = 0; i < arrNew.length; i++) {
        var numNotStr = +arrNew[i];
        numArr.push(numNotStr);
    }
    return numArr;
}

twoSum(nums, target);





// работает правильно только для массива: [2, 7, 11, 15]

var nums = [2, 7, 11, 15];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var numsCopy = nums.slice();
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            var index = nums.indexOf(target);
            indexArr.unshift(index);
            return indexArr;
        } else {
            numsCopy.sort(function (a, b) {
                // console.log(a);
                // console.log(b);
                var sum = a + b;
                if (sum == target) {
                    var index = nums.indexOf(a);
                    indexArr.push(index);
                    index = nums.indexOf(b);
                    indexArr.push(index);
                }
            });

            var filteredArray = indexArr.filter(function (item, pos) {
                return indexArr.indexOf(item) == pos;
            });

            return filteredArray;
        }
    }
}

twoSum(nums, target);







var nums = [2, 7, 11, 15];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.push(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();
    numsCopy.sort(function (a, b) {
        for (var i = 0; i < nums.length; i++) {
            var a = nums[i];
            var sum = a + b;
            if (sum == target) {
                var index = nums.indexOf(a);
                indexArr.push(index);
                index = nums.indexOf(b);
                indexArr.push(index);
                return indexArr;
            }
        }
    });
    var filteredArray = indexArr.filter(function (item, pos) {
        return indexArr.indexOf(item) == pos;
    });
    return filteredArray;
}

twoSum(nums, target);










var nums = [2, 7, 11];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.push(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();
    var j = 1;
    for (var i = 0; i < nums.length; i++) {
        var a = nums[i];
        console.log(a);
        var b = nums[j];
        console.log(b);
        var sum = a + b;
        if (sum == target) {
            var index = nums.indexOf(a);
            indexArr.push(index);
            index = nums.indexOf(b);
            indexArr.push(index);
            return indexArr;
        }
        i--;
    }
};
var filteredArray = indexArr.filter(function (item, pos) {
    return indexArr.indexOf(item) == pos;
});
console.log(filteredArray);

twoSum(nums, target);











var nums = [2, 7, 11, 15];
var target = 9;
var indexArr = [];
var numArr = [];

var twoSum = function (nums, target) {
    var theSameDig = nums.indexOf(target);
    if (theSameDig != -1) {
        indexArr.push(theSameDig);
        return indexArr;
    }
    var numsCopy = nums.slice();
    var j = 1;
    for (var i = 0; i < nums.length;) {
        var a = nums[i];
        console.log('a: ' + a);
        var b = nums[j];
        console.log('b: ' + b);
        var sum = a + b;
        if (sum == target) {
            var index = nums.indexOf(a);
            indexArr.unshift(index);
            index = nums.indexOf(b);
            indexArr.unshift(index);
            return indexArr;
        }
        j++;
    }
};
var obj = [];
for (var i = 0; i < indexArr.length; i++) {
    var str = + indexArr[i];
    obj[str] = true;
}
var arrNew = Object.keys(obj);
for (var i = 0; i < arrNew.length; i++) {
    var numNotStr = +arrNew[i];
    numArr.push(numNotStr);
}
console.log(numArr);

twoSum(nums, target);
















var nums = [2, 11, 45, 7];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var numsCopy = nums.slice();
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            var index = nums.indexOf(target);
            indexArr.unshift(index);
            return indexArr;
        }
        var i = 0;
        var j = 1;
        for (; i < nums.length;) {
            for (; i < nums.length;) {
                var a = nums[i];
                var b = nums[j];
                var sum = a + b;
                if (sum == target) {
                    var index = nums.indexOf(a);
                    indexArr.push(index);
                    index = nums.indexOf(b);
                    indexArr.push(index);
                    return indexArr;
                } else {
                    j++;
                }
            }
            i++;
            j++;
        }
    }
}

twoSum(nums, target);











var nums = [11, 2, 45, 7];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var numsCopy = nums.slice();
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            var index = nums.indexOf(target);
            indexArr.unshift(index);
            return indexArr;
        }
        var k = 0;
        var i = 0;
        var j = 0;
        for (; i < nums.length; i++) {
            j++;
            // debugger;
            for (; j < nums.length; j++) {
                var a = nums[i];
                var b = nums[j];
                var sum = a + b;
                // debugger;
                if (sum == target) {
                    // debugger;
                    var index = nums.indexOf(a);
                    indexArr.push(index);
                    index = nums.indexOf(b);
                    indexArr.push(index);
                    return indexArr;
                }
                // debugger;
            }
            k++;
            j = k;
            // debugger;
        }
        // debugger;
    }
}

twoSum(nums, target);










// ура блять!

var nums = [2, 7, 11, 15];
var target = 9;
var indexArr = [];

var twoSum = function (nums, target) {
    var numsCopy = nums.slice();
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            var index = nums.indexOf(target);
            indexArr.unshift(index);
            return indexArr;
        } else {
            var k = 0;
            var i = 0;
            var j = 0;
            for (; i < nums.length; i++) {
                j++;
                for (; j < nums.length; j++) {
                    var a = nums[i];
                    var b = nums[j];
                    var sum = a + b;
                    if (sum == target) {
                        var index = nums.indexOf(a);
                        indexArr.push(index);
                        index = nums.indexOf(b);
                        indexArr.push(index);
                    }
                }
                k++;
                j = k;
            }
            var filteredArray = indexArr.filter(function (item, pos) {
                return indexArr.indexOf(item) == pos;
            });
            return filteredArray;
        }
    }
}

twoSum(nums, target);










// готово:

var nums = [2, 7, 11, 15];
var target = 9;

var twoSum = function (nums, target) {
    var indexArr = [];
    var numsCopy = nums.slice();
    for (var i = 0; i < nums.length; i++) {
        var k = 0;
        var i = 0;
        var j = 0;
        for (; i < nums.length; i++) {
            j++;
            for (; j < nums.length; j++) {
                var a = nums[i];
                var b = nums[j];
                var sum = a + b;
                if (sum == target) {
                    indexArr.push(i);
                    indexArr.push(j);
                }
            }
            k++;
            j = k;
        }
        return indexArr;
    }
}

twoSum(nums, target);