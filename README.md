# SeismicDet: NASA Space Apps Challenge
## Please read the notes at the end of the repository
In this repo, you will find the code we worked on for the project which contains the following:
- The frontend
- The model we are working on for processing the data and providing an approximation in the plot compared to actual results (You can inspect the code here and try it on the provided dataset provided by us)


# Background:
Based on the dataset, we had a lot of noisy signals given to us. At first sight, it can look like it's hard to predict when an earthquake is starting from the normal wave representation, however, converting that wave to a spectrogram shows an interesting thing. Most of the time, a pattern appears when there is an actual earthquake. This is where our idea appeared, to convert the raw data given to us to a spectrogram that can make it easier for the end-user or the researcher or even a model to detect where an earthquake can happen. We were able to do this by applying Fast Fourier Transform (FFT) on the wave which returns the interesting parts.

This on its own saves bandwidth and power since we return the minimum data possible that is useful. Other features involves the ability to edit padding, wave sensitivity, nperseg as well as automatic delta detection based on the given file.
Even if the event ends, we are still extending the project to be as complete as possible and include more features in the future.

## Front-end overview:
Landing page:
![image](https://github.com/user-attachments/assets/d9ade66a-ccef-4825-a96b-c8adf720a39d)

Output visualization (with a separate output given for download as shown in the I/O example)
![image](https://github.com/user-attachments/assets/bf6868ca-24b4-4463-8160-43adf40b596d)

Input page:
![image](https://github.com/user-attachments/assets/3f2843b4-7ea4-4761-bbfb-b433697c9cad)



# Examples of input/output:
## Input:
  ![image](https://github.com/user-attachments/assets/375f603b-4552-4c70-8817-6f9bf25484c2)
## Output:
  ![image](https://github.com/user-attachments/assets/0512fa7f-a11b-48b8-9034-70583bc7c092)

## The idea behind the data processing (Fast Fourier Transform):
![image](https://github.com/user-attachments/assets/b8c71da6-b6e4-444b-8190-802ed2f0ee75)

## A random sample of the closeness between the actual arrival and the predicted result based on the strongest signal shown (To be fine-tuned later):
![image](https://github.com/user-attachments/assets/88aa516c-b2e0-43e8-98bb-4ad5974b3fce)


# Notes:
- The API is not well functional yet, we will work on it in the future to be completely working
- In the preprocessing notebook, you will find some plots that are entirely in orange, those can be solved by adjusting the threshold, which will be automatically handled later
- Due to known issues on the original NASA Space Apps dataset and to save time, we have provided a minimized dataset to test our preprocessing algorithm
