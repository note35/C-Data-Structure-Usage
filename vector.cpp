#include <iostream>
#include <vector>
using namespace std;
int main ()
{
    //basic vector declaration
    vector<int> a;                              //empty vector
    vector<int> b(4,100);                       //100 100 100 100      
    vector<int> c(b);                           //duplicate b    
    int d[] = {1,2,3,4};
    vector<int> e (d, d+sizeof(d)/sizeof(int)); //1 2 3 4 

    //iterator declaration 
    vector<int>::iterator it;
    vector<int>::reverse_iterator rit;

    //iterator vector declaration
    it = e.begin();                             //*it = 1
    vector<int> f (it+1,it+2);                  //2 3

    //iterator loop
    cout << "a: ";
    for (it=a.begin(); it!=a.end(); it++) 
    { 
        cout << *it << " ";                     //empty
    }
    cout << endl;

    //reverse iterator loop
    cout << "b: ";
    for (rit=b.rbegin(); rit!=b.rend(); rit++) 
    { 
        cout << *rit << " ";                    //100 100 100 100
    }
    cout << endl;

    //const_iterator loop (C++11)
    cout << "c: ";
    for (auto it=c.cbegin(); it!=c.cend(); it++) 
    { 
        cout << *it << " ";                     //100 100 100 100
    }
    cout << endl;

    //reverse_const_iterator loop (C++11)
    cout << "e: ";
    for (auto rit=e.crbegin(); rit!=e.crend(); rit++) 
    { 
        cout << *rit << " ";                    //4 3 2 1
    }
    cout << endl;

    cout << "**********************************" << endl;

    //size
    cout << "e.size(): " << e.size() << endl;           //4 

    //max_size()
    cout << "e.max_size(): " << e.max_size() << endl;   //a big number

    //capacity()
    cout << "e.capacity(): " << e.capacity() << endl;   //2^x number

    //reverse : change capacity
    e.reserve(10);                                      //10
    cout << "e.reserve(10) => e.capacity(): " << e.capacity() << endl;

    //shrink_to_fit()               
    e.shrink_to_fit();                                  //4
    cout << "shrink_to_fit(): " << e.capacity() << endl;

    //resize()
    cout << "resize(6,5): ";
    e.resize(6,5);
    cout << "e.resize(6,5): ";
    for (auto it=e.cbegin(); it!=e.cend(); it++) 
    { 
        cout << *it << " ";                     //1 2 3 4 5 5
    }
    cout << endl;

    cout << "resize(4): ";
    e.resize(4);
    cout << "e.resize(4): ";
    for (auto it=e.cbegin(); it!=e.cend(); it++) 
    { 
        cout << *it << " ";                     //1 2 3 4 
    }
    cout << endl;

    //push_back()
    e.push_back(1);                             //1 2 3 4 1

    //insert()
    it = e.begin();
    e.insert (it+1, 10);                        //1 10 2 3 4 1
    e.insert (it, 2, 20);                       //20 20 1 10 2 3 4 1

    //erase()
    it = e.begin();
    e.erase (it, it+3);                         //10 2 3 4 1

    //clear();
    e.clear();                                  //empty

    //swap()
    e.swap(c);                                  //100 100 100 100

    //pop_back()
    while (!e.empty())
    {
        e.pop_back();                           //empty
    }

    //get_allocator()
    //It's not common. Array can build-in every vector.
    int *p, i;
    p = e.get_allocator().allocate(1);
    e.get_allocator().construct(&p[0],100);
    cout << "e.get_allocator(): ";
    for (i=0; i<1; i++)
    { 
        cout << p[i] << " ";                     
    }
    cout << endl;
    e.get_allocator().destroy(&p[0]);
    e.get_allocator().deallocate(p,1);

    return 0;
}

