package com.company;

import java.util.Scanner;

//package src.mike; -> package is just a folder name and '.' is used for subfolders
// name of public Class and File must be Same in case of private class it doesn't matter
public class Main{
    //entry point (name must be `main`)
// static keyword - this main function runs without creating the object of the main class
//void - return type of main function
//string[] args - it  is the command line argument you can give to the main function when running this file
    public static void main(String[]args){
        Scanner input = new Scanner(System.in);
        System.out.println(input.next());

    }

}