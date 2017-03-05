public class Solution {
	public void generateMatrix(int a) {
	   int arr[][]=new int[a][a];
	
	   int l=0;
	   int m=a;
	   int dir=0;
	   int o=a;
	   int x=0;
	   int y=0;
	   int top=0;
	   for(int i=1;i<=a*a;i++)
	   {
	       switch(dir)
	       {
	           case 0:
	               if(y==m-1)
	               {
	                   arr[x][y]=i;
	                   dir=1;
	                   m--;
	               }
	               else
	               {
	                 
	                   arr[x][y]=i;
	                     y++;
	               }
	               
	               break;
	           case 1:
	               if(x==o-1)
	               {
	                   arr[x][y]=i;
	                   dir=2;
	                   o--;
	               }
	               else
	               {
	                   arr[x][y]=i;
	                   x++;
	               }
	               break;
	           case 2:
	               if(y==l)
	               {
	                   arr[x][y]=i;
	                   dir=3;
	                   l++;
	               }
	               else
	               {
	                   arr[x][y]=i;
	                   y--;
	               }
	               break;
	               
	           case 3:
	               if(x==top)
	               {
	                   arr[x][y]=i;
	                   dir=0;
	                   top++;
	                   
	               }
	               else
	               {
	                   arr[x][y]=i;
	                   x--;
	                   
	               }
	       break;
	           
	           
	           
	           
	           
	       }
	   }
	    for(int i=0;i<a;i++)
	    {
	        for(int j=0;i<a;i++)
	        {
	            System.out.print(arr[i][j]+" ");
	        }
	        System.out.println();
	    }

	}
	public static void main(String args[])
	{
		generateMatrix(4);
	}
}
