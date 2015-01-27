/*
http://stackoverflow.com/questions/27677964/print-current-system-time-in-nanoseconds-using-c-chrono/27678121#27678121
*/

#include <iostream>
#include <chrono>
#include <ctime>
#include <unistd.h>
#include <sys/time.h>

int main()
{
    char fmt[64];
    char buf[64];
    std::chrono::time_point<std::chrono::system_clock> now = std::chrono::system_clock::now();
    std::time_t now_c = std::chrono::system_clock::to_time_t(now);
    struct tm * now_tm = localtime (&now_c);
//    std::time_t time = std::chrono::system_clock::to_time_t(ntime);
    auto duration = now.time_since_epoch();

    typedef std::chrono::duration<int, std::ratio_multiply<std::chrono::hours::period, std::ratio<8> >::type> Days;
    Days days = std::chrono::duration_cast<Days>(duration);
    duration -= days;
    std::cout << days.count() << std::endl;

    auto hours = std::chrono::duration_cast<std::chrono::hours>(duration);
    duration -= hours;
    auto minutes = std::chrono::duration_cast<std::chrono::minutes>(duration);
    duration -= minutes;
    auto seconds = std::chrono::duration_cast<std::chrono::seconds>(duration);
    duration -= seconds;
    auto milliseconds = std::chrono::duration_cast<std::chrono::milliseconds>(duration);
    duration -= milliseconds;
    auto microseconds = std::chrono::duration_cast<std::chrono::microseconds>(duration);
    duration -= microseconds;
    auto nanoseconds = std::chrono::duration_cast<std::chrono::nanoseconds>(duration);
    strftime (fmt, sizeof (fmt), "%H:%M:%S:%%06u", now_tm);
    std::cout << fmt << std::endl;
    std::cout << hours.count() << ":"
                << minutes.count() << ":"
                << seconds.count() << ":"
                << milliseconds.count() << ":"
                << microseconds.count() << ":"
                << nanoseconds.count() << std::endl;
}
