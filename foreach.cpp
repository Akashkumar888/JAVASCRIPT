#include<iostream>
using namespace std;
int main(){
int brr[]={1,4,6,0,2,7,9,8};
int n=sizeof(brr)/sizeof(brr[0]);

for (auto it : brr)
{
    cout<<it<<" ";
}
cout<<endl;
for (auto &it : brr)
{
    it=it*2;
    //cout<<it<<" ";
}
cout<<endl;
for (auto it : brr)
{
    cout<<it<<" ";
}
    return 0;
}