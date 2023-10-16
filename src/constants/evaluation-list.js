export const EVAL_LIST = [
  {
    model: "Model Hibrid VGG16-SVM",
    result: [
      {
        scenario: "Pertama (Dense 512 + Dropout 0.1)",
        data: [
          {
            fold: 1,
            epoch: "-",
            train_acc: 97.8,
            test_acc: 92.5,
            runtime: 2.8,
          },
          {
            fold: 2,
            epoch: "-",
            train_acc: 97.2,
            test_acc: 92.5,
            runtime: 3.4,
          },
          {
            fold: 3,
            epoch: "-",
            train_acc: 98.1,
            test_acc: 92.5,
            runtime: 3.4,
          },
          {
            fold: 4,
            epoch: "-",
            train_acc: 97.8,
            test_acc: 96.2,
            runtime: 3.4,
          },
          {
            fold: 5,
            epoch: "-",
            train_acc: 98.4,
            test_acc: 90,
            runtime: 3.4,
          },
        ],
      },
      {
        scenario: "Kedua (Dense 256 + Dropout 0.1)",
        data: [
          {
            fold: 1,
            epoch: "-",
            train_acc: 97.8,
            test_acc: 95,
            runtime: 3.4,
          },
          {
            fold: 2,
            epoch: "-",
            train_acc: 97.8,
            test_acc: 93.8,
            runtime: 4.4,
          },
          {
            fold: 3,
            epoch: "-",
            train_acc: 97.8,
            test_acc: 93.8,
            runtime: 3.3,
          },
          {
            fold: 4,
            epoch: "-",
            train_acc: 97.8,
            test_acc: 96.2,
            runtime: 3.4,
          },
          {
            fold: 5,
            epoch: "-",
            train_acc: 98.8,
            test_acc: 90,
            runtime: 3.4,
          },
        ],
      },
    ],
  },
  {
    model: "Model VGG16 Classifier",
    result: [
      {
        scenario: "Pertama (Dense 512 + Dropout 0.1)",
        data: [
          {
            fold: 1,
            epoch: 23,
            train_acc: 98.4,
            test_acc: 96.2,
            runtime: 102.1,
          },
          {
            fold: 2,
            epoch: 25,
            train_acc: 97.8,
            test_acc: 88.7,
            runtime: 111.9,
          },
          {
            fold: 3,
            epoch: 28,
            train_acc: 98.4,
            test_acc: 93.7,
            runtime: 122.8,
          },
          {
            fold: 4,
            epoch: 26,
            train_acc: 97.8,
            test_acc: 96.2,
            runtime: 118.8,
          },
          {
            fold: 5,
            epoch: 26,
            train_acc: 98.4,
            test_acc: 90,
            runtime: 119.2,
          },
        ],
      },
      {
        scenario: "Kedua (Dense 256 + Dropout 0.1)",
        data: [
          {
            fold: 1,
            epoch: 26,
            train_acc: 98.4,
            test_acc: 96.2,
            runtime: 108,
          },
          {
            fold: 2,
            epoch: 25,
            train_acc: 98.7,
            test_acc: 88.7,
            runtime: 115.7,
          },
          {
            fold: 3,
            epoch: 30,
            train_acc: 97.8,
            test_acc: 91.2,
            runtime: 124.2,
          },
          {
            fold: 4,
            epoch: 28,
            train_acc: 98.1,
            test_acc: 96.2,
            runtime: 116.8,
          },
          {
            fold: 5,
            epoch: 29,
            train_acc: 98.8,
            test_acc: 95,
            runtime: 123.7,
          },
        ],
      },
    ],
  },
];
