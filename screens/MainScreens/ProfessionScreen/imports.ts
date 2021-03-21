import React, {useState} from 'react';
import Header from '../../../components/Header';
import MenuItem from '../../../components/MenuItem';
import {Text, FlatList, Pressable, Image, ScrollView} from 'react-native';
import {styles} from './styles';
import axios from '../../../utils/axios';
import {
  IProfessionsProps,
  IProfessionScreenProps,
} from '../../../interfaces/profession';
import {ENDPOINTS} from '../../../constants/endpoints';
import {SCREENS} from '../../../constants/data';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {Arrow} from '../../../assets/images';
import {useFocusEffect} from '@react-navigation/native';
import Loading from '../../../components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export {
  React,
  Header,
  MenuItem,
  Loading,
  FlatList,
  Pressable,
  styles,
  Text,
  axios,
  useState,
  useFocusEffect,
  ENDPOINTS,
  SCREENS,
  Arrow,
  Image,
  SafeAreaInsetsContext,
  AsyncStorage,
  ScrollView,
};

export type {IProfessionsProps, IProfessionScreenProps};
