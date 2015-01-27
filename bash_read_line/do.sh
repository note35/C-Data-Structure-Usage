#!/bin/bash

while read line;
do
    tar -xvf "$line";
done <<< "`ls|grep -G '.tar$'`";
