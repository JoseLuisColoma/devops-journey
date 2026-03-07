#!/bin/bash

while true
  do
    top -b -n1 | head -5
    sleep 5
  done
