amy 4 digit pin of her phone.She remembers the absolute difference between first two and the last two 
digits is D1 and D2. find the no of possible pins. pin consists of digits from 0-9.  
ex:
 9 9
 output:4  [possible combinations will be 0909 9090 0990 9009]
 

map1={}
#this map takes all the possible difference of numbers from 0-9 and stores all the combinations of the numbers which result in that difference
for index in range(9,-1,-1):
    for indexj in range(index):
        try:
            map1[index-indexj]+=[(index,indexj)]
            #map1[9-0] doesent exists in the beginning . so, to handle such situation we used try and except
        except:
            map1[index-indexj]=[(index,indexj)]
            #this handles a case where the key doesent exists in the beginning
    
t=int(input())
for i in range(t):
    d1,d2=map(int,input().split(" "))
    
    
    print(len(map1[d1])*2*len(map1[d2])*2)#no of combinations of numbers which result in specific differences are multiplied based on 
   # the no of combinations in the map1 map.
