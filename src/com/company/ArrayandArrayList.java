package com.company;


import java.util.ArrayList;
import java.util.Arrays;


public class ArrayandArrayList {
    public static void main(String[] args) {
        int[] name = new int[5]; // declaration and initialization
        String[] names= {"mike","el","nancy","steve","johnathan"};
        // arrays are mutable but string not
        // mutable : we can change the original array

        //2d Arrays
        int[][] arr = new int[3][4];
        // 3 is number of rows and 4 is number of columns, no. of rows are mandatory to define but columns are not

        // Array list (unlimited size array)
        ArrayList<Integer>  list = new ArrayList<>(2);
        list.add(1);
        list.add(2);
        list.add(8903);
        list.add(23);
        System.out.println(list.get(2));

        // there are lot of methods in list explore...


        //swapping of array items
        swap(names,2,3);
        System.out.println(Arrays.toString(names));
    }
    static void swap(String[] arr,int index1, int index2){
        String temp=arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=temp;


    }
}
