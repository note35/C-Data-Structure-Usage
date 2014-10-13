#include <queue>
#include <iostream>
using namespace std;

/*
    Usage:
    
    queue<int>
    q.push(i)
    q.size() 
    q.front()
    q.back()
    q.empty()
    q.pop() 
    q1.swap(q2)
    q3.emplace(1)
*/

int main()
{
    //declare
    queue<int> q;
    
    //void push (const value_type& val);
    //void push (value_type&& val);
    int i;
    for (i=0; i<10; i++)
        q.push(i);

    //size_type size() const;
    cout << "size(): " << q.size() << endl;

    //const value_type& back();   C++98
    //const_reference& back();    C++11
    cout << "front(): " << q.front() << endl;
    cout << "back(): " << q.back() << endl;

    //bool empty() const;
    while (!q.empty())
    {
        //void pop();
        q.pop();
    }

    cout << "size(): --after pop-- " << q.size() << endl;

    /* C++11 Feature */
    /* g++ -std=c++11 cpp-file */
    queue<int> q1;
    queue<int> q2;
    for (i=0; i<10; i++)
    {
        q1.push(i);  // 0 1 2 3 4 5 6 7 8 9 
        q2.push(5);  // 5 5 5 5 5 5 5 5 5 5  
    }

    //void swap (queue& x) noexcept();
    q1.swap(q2);
    cout << "swap(): "; 
    while (!q2.empty())
    {
        cout << q2.front() << " "; // 0 1 2 3 4 5 6 7 8 9
        q2.pop();
    } 
    cout << endl;


    //template <class... Args> void emplace (Args&&... args); => "dequeue"
    queue<int> q3;
    q3.emplace(1);
    q3.emplace(2);
    cout << "emplace(): ";
    while (!q3.empty())
    {
        cout << q3.front() << " "; //1 2
        q3.pop();
    } 
    cout << endl;
}
