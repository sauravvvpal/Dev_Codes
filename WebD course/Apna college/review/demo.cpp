#include <iostream>
using namespace std;

void getarray(int *arr,int m){
    cout << "Enter the array elements";
    for(int i=0;i<m;i++){
        cin >> *(arr+i);
    }
}

void traverse(int arr[],int m){
    for(int i=0;i<m;i++){
        cout << arr[i] << " ";
    }
}

int main() {
int n,m;
    cout << "What is the size of the array: ";
    cin >> n;

    cout << "How many elements do you want to enter: ";
    cin >> m;

    int arr[n];
    getarray(arr,m);
    traverse(arr,m);
  return 0;
}
