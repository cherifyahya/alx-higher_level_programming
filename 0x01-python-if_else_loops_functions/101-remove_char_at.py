#!/usr/bin/python3
def remove_char_at(str, n):
    sstr = ""
    for i, c in enumerate(str):
        if i != n:
            sstr +=c
    return sstr  
