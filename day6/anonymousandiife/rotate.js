// Rotate an array by k times
// anonymous
var RightRotate=function (a, n, k)
{
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {

            document.write(a[n + i - k] + " ");
        }
        else {
 
            document.write((a[i - k]) + " ");
        }
    }
    document.write("<br>");
}
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
 
RightRotate(Array, N, K);

// IIFE
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
function RightRotate (a, n, k)
{
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {

            document.write(a[n + i - k] + " ");
        }
        else {
 
            document.write((a[i - k]) + " ");
        }
    }
    document.write("<br>");
}RightRotate(Array, N, K);