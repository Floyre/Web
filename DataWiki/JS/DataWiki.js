var dataset = [
    { num: 0, id: "cmu", name: "CMU", description: "-", link: "http://domedb.perception.cs.cmu.edu/", task: ["-"], instances: "-", category: "Image", field: "3-D Estimation", tutorial: "-" },
    { num: 1, id: "human-3.6m", name: "Human 3.6M", description: "The Human3.6M dataset is one of the largest motion capture datasets, which consists of 3.6 million human poses and corresponding images captured by a high-speed motion capture system. There are 4 high-resolution progressive scan cameras to acquire video ...", link: "http://vision.imar.ro/human3.6m/description.php", task: ["3D_Human_Pose_Estimation", "3D_Absolute_Human_Pose_Estimation", "Human_action_generation"], instances: "-", category: "Image", field: "3-D Estimation", tutorial: "-" },
    { num: 2, id: "apoloscape", name: "ApoloScape", description: "-", link: "http://apolloscape.auto/", task: ["-"], instances: "-", category: "Image", field: "Autonomous Driving", tutorial: "https://capsulesbot.com/blog/2018/08/24/apolloscape-posenet-pytorch.html" },
    { num: 3, id: "cifar-10", name: "cifar-10", description: "The CIFAR-10 dataset (Canadian Institute for Advanced Research, 10 classes) is a subset of the Tiny Images dataset and consists of 60000 32x32 color images. The images are labelled with one of 10 mutually exclusive classes: airplane, automobile (but not ...", link: "https://www.cs.toronto.edu/~kriz/cifar.html", task: ["Image_Classification", "Image_Generation", "Graph_Classification"], instances: "60000", category: "Image", field: "Classification", tutorial: "https://ermlab.com/en/blog/nlp/cifar-10-classification-using-keras-tutorial/" },
    { num: 4, id: "cifar-100", name: "cifar-100", description: "The CIFAR-100 dataset (Canadian Institute for Advanced Research, 100 classes) is a subset of the Tiny Images dataset and consists of 60000 32x32 color images. The 100 classes in the CIFAR-100 are grouped into 20 superclasses. There are 600 images per cla...", link: "https://www.cs.toronto.edu/~kriz/cifar.html", task: ["Image_Classification,Image_Generation", "Few-Shot_Image_Classification"], instances: "60000", category: "Image", field: "Classification", tutorial: "-" },
    { num: 5, id: "omniglot", name: "omniglot", description: "Omniglot is a large dataset of hand-written characters with 1623 characters and 20 examples for each character. These characters are collected based upon 50 alphabets from different countries. It contains both images and strokes data. Stroke data are coo...", link: "https://github.com/brendenlake/omniglot#python", task: ["Few-Shot_Image_Classification", "Density_Estimation", "Multi-Task_Learning"], instances: "38300", category: "Image", field: "Classification", tutorial: "https://towardsdatascience.com/few-shot-learning-with-prototypical-networks-87949de03ccd" },
    { num: 6, id: "mnist", name: "mnist", description: "The MNIST database (Modified National Institute of Standards and Technology database) is a large collection of handwritten digits. It has a training set of 60,000 examples, and a test set of 10,000 examples. It is a subset of a larger NIST Special Databa...", link: "http://yann.lecun.com/exdb/mnist/", task: ["Image_Classification", "Image_Generation", "Domain_Adaptation"], instances: "60000", category: "Image", field: "Classification", tutorial: "https://towardsdatascience.com/image-classification-in-10-minutes-with-mnist-dataset-54c35b77a38d" },
    { num: 7, id: "celeba", name: "celebA", description: "The Street View House Number (SVHN) is a digit classification benchmark dataset that contains 600000 32×32 RGB images of printed digits (from 0 to 9) cropped from pictures of house number plates. The cropped images are centered in the digit of interest,...", link: "http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html", task: ["Image_Classification", "Image_Generation", "Face_Alignment"], instances: "-", category: "Image", field: "Classification", tutorial: "-" },
    { num: 8, id: "svhn", name: "SVHN", description: "-", link: "http://ufldl.stanford.edu/housenumbers/", task: ["Image_Classification", "Domain_Adaption", "Semi-Supervised_Image_Classification"], instances: "-", category: "Image", field: "Classification", tutorial: "-" },
    { num: 9, id: "street_style_dataset_of_matzen", name: "Street Style dataset of Matzen", description: "-", link: "http://streetstyle.cs.cornell.edu/", task: ["-"], instances: "-", category: "Image", field: "Classification", tutorial: "-" },
    { num: 10, id: "pku_vehicleid", name: "PKU VehicleID(VehicleID)", description: "The “VehicleID” dataset contains CARS captured during the daytime by multiple real-world surveillance cameras distributed in a small city in China. There are 26,267 vehicles (221,763 images in total) in the entire dataset. Each image is attached with...", link: "https://pkuml.org/resources/pku-vehicleid.html", task: ["Vehicle_Re-Identification"], instances: "-", category: "Image", field: "Classification", tutorial: "-" },
    { num: 11, id: "the_in-shop_clothes", name: "The In-shop Clothes", description: "-", link: "http://mmlab.ie.cuhk.edu.hk/projects/DeepFashion/InShopRetrieval.html", task: ["-"], instances: "-", category: "Image", field: "Classification", tutorial: "-" },
    { num: 12, id: "taskonomy", name: "Taskonomy", description: "Taskonomy provides a large and high-quality dataset of varied indoor scenes.    Complete pixel-level geometric information via aligned meshes.  Semantic information via knowledge distillation from ImageNet, MS COCO, and MIT Places.  Globally consistent c...", link: "http://taskonomy.stanford.edu/", task: ["Depth_Estimation", "Surface_Normals_Estimation"], instances: "-", category: "Image", field: "Depth Estimation", tutorial: "-" },
    { num: 13, id: "cuhk_face_sketch_database", name: "CUHK Face Sketch Database(CUFS)", description: "-", link: "http://www.ee.cuhk.edu.hk/~xgwang/datasets.html", task: ["-"], instances: "-", category: "Image", field: "Face Sketch", tutorial: "-" },
    { num: 14, id: "chestx-ray8	", name: "ChestX-ray8", description: "ChestX-ray8 is a medical imaging dataset which comprises 108,948 frontal-view X-ray images of 32,717 (collected from the year of 1992 to 2015) unique patients with the text-mined eight common disease labels, mined from the text radiological reports via N...", link: "https://www.kaggle.com/nih-chest-xrays/data", task: ["Image_Classification", "Computed_Tomography(CT)"], instances: "-", category: "Image", field: "Medical Classification", tutorial: "-" },
    { num: 15, id: "kitti", name: "kitti", description: "KITTI (Karlsruhe Institute of Technology and Toyota Technological Institute) is one of the most popular datasets for use in mobile robotics and autonomous driving. It consists of hours of traffic scenarios recorded with a variety of sensor modalities, in...", link: "http://www.cvlibs.net/datasets/kitti/", task: ["Object_Detection", "Semantic_Segmentation", "Image_Super-Resolution"], instances: ">100 GB of data", category: "Image", field: "Object Detection", tutorial: "https://github.com/joseph-zhang/KITTI-TorchLoader" },
    { num: 16, id: "pascal_voc_2012", name: "pascal voc 2012", description: "-", link: "http://host.robots.ox.ac.uk/pascal/VOC/voc2012/", task: ["-"], instances: "-", category: "Image", field: "Object Detection", tutorial: "-" },
    { num: 17, id: "cityscapes", name: "Cityspcapes", description: "Cityscapes is a large-scale database which focuses on semantic understanding of urban street scenes. It provides semantic, instance-wise, and dense pixel annotations for 30 classes grouped into 8 categories (flat surfaces, humans, vehicles, constructions...", link: "https://www.cityscapes-dataset.com/", task: ["Image_Generation", "Semantic_Segmentation", "Image-to-Image_Translation"], instances: "25000", category: "Image", field: "Object Detection", tutorial: "-" },
    { num: 18, id: "aflw", name: "AFLW", description: "The Annotated Facial Landmarks in the Wild (AFLW) is a large-scale collection of annotated face images gathered from Flickr, exhibiting a large variety in appearance (e.g., pose, expression, ethnicity, age, gender) as well as general imaging and environm...", link: "https://www.tugraz.at/institute/icg/research/team-bischof/lrs/downloads/aflw/", task: ["Face_Alignment", "Facial_Landmark's_Detection", "Low-Light_Image_Enhancement"], instances: "-", category: "Image", field: "Object Detection", tutorial: "-" },
    { num: 19, id: "caltech_101", name: "Caltech101", description: "The Caltech101 dataset contains images from 101 object categories (e.g., “helicopter”, “elephant” and “chair” etc.) and a background category that contains the images not from the 101 object categories. For each object category, there are abo...", link: "http://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/", task: ["Fine-Grained_Image_Classification", "Semi-Supervised_Image_Classification", "Density_Estimation"], instances: "9146", category: "Image", field: "Object Detection", tutorial: "-" },
    { num: 20, id: "caltech_256", name: "Caltech256", description: "Caltech-256 is an object recognition dataset containing 30,607 real-world images, of different sizes, spanning 257 classes (256 object classes and an additional clutter class). Each class is represented by at least 80 images. The dataset is a superset of...", link: "https://authors.library.caltech.edu/7694/", task: ["Few-Shot_Image_Classification", "Semi-Supervised_Image_Classification"], instances: "30607", category: "Image", field: "Object Detection", tutorial: "-" },
    { num: 21, id: "amazon", name: "Amazon", description: "-", link: "https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/cd-create-dataset.html", task: ["-"], instances: "-", category: "Image", field: "Object Detection", tutorial: "-" },
    { num: 22, id: "nlpr", name: "NLPR", description: "The NLPR dataset for salient object detection consists of 1,000 image pairs captured by a standard Microsoft Kinect with a resolution of 640×480. The images include indoor and outdoor scenes (e.g., offices, campuses, streets and supermarkets).", link: "https://www.abbreviationfinder.org/ko/acronyms/nlpr.html", task: ["RGB-D_Salient_Object_Detection"], instances: "-", category: "Image", field: "Object Detection", tutorial: "-" },
    { num: 23, id: "coco", name: "coco", description: "The MS COCO (Microsoft Common Objects in Context) dataset is a large-scale object detection, segmentation, key-point detection, and captioning dataset. The dataset consists of 328K images.    Splits: The first version of MS COCO dataset was released in 2...", link: "https://cocodataset.org/#home", task: ["Pose_Estimation", "Object_Detection", "Semantic_Segmentation"], instances: "2500000", category: "Image", field: "Object Recognition", tutorial: "https://medium.com/fullstackai/how-to-train-an-object-detector-with-your-own-coco-dataset-in-pytorch-319e7090da5" },
    { num: 24, id: "imagenet	", name: "imagenet", description: "The ImageNet dataset contains 14,197,122 annotated images according to the WordNet hierarchy. Since 2010 the dataset is used in the ImageNet Large Scale Visual Recognition Challenge (ILSVRC), a benchmark in image classification and object detection. The ...", link: "http://image-net.org/about-overview", task: ["Image_Classification", "Image_Generation", "Few-Shot_Learning"], instances: "14197122", category: "Image", field: "Object Recognition", tutorial: "-" },
    { num: 25, id: "sun", name: "sun", description: "-", link: "https://vision.princeton.edu/projects/2010/SUN/", task: ["-"], instances: "131067", category: "Image", field: "Object Recognition", tutorial: "-" },
    { num: 26, id: "lsun", name: "lsun", description: "The Large-scale Scene Understanding (LSUN) challenge aims to provide a different benchmark for large-scale scene classification and understanding. The LSUN classification dataset contains 10 scene categories, such as dining room, bedroom, chicken, outdoo...", link: "https://www.yf.io/p/lsun", task: ["Image_Generation"], instances: "-", category: "Image", field: "Saliency Detection", tutorial: "-" },
    { num: 27, id: "replica", name: "Replica", description: "The Replica Dataset is a dataset of high quality reconstructions of a variety of indoor spaces. Each reconstruction has clean dense geometry, high resolution and high dynamic range textures, glass and mirror surface information, planar segmentation as we...", link: "https://github.com/facebookresearch/Replica-Dataset", task: ["Domain_Adaption", "Visual_Navigation", "Scene_Generation"], instances: "-", category: "Image", field: "Scene Generation", tutorial: "-" },
    { num: 28, id: "scannet", name: "scannet", description: "ScanNet is an instance-level indoor RGB-D dataset that includes both 2D and 3D data. It is a collection of labeled voxels rather than points or objects. Up to now, ScanNet v2, the newest version of ScanNet, has collected 1513 annotated scans with an appr...", link: "http://www.scan-net.org/", task: ["Semantic_Segmentation", "Depth_Estimation", "3D_Reconstruction"], instances: "-", category: "Image", field: "Semantic Segmentation", tutorial: "-" },
    { num: 29, id: "nyu_depth_v1_v2", name: "nyu depth V1, V2", description: "-", link: "https://cs.nyu.edu", task: ["-"], instances: "-", category: "Image", field: "Semantic Segmentation", tutorial: "-" },
    { num: 30, id: "lip", name: "lip", description: "The LIP (Look into Person) dataset is a large-scale dataset focusing on semantic understanding of a person. It contains 50,00 images with elaborated pixel-wise annotations of 19 semantic human part labels and 2D human poses with 16 key points. The images...", link: "http://sysu-hcp.net/lip/index.php", task: ["Semantic_Segmentation"], instances: "-", category: "Image", field: "Semantic Segmentation", tutorial: "-" },
    { num: 31, id: "ade", name: "ADE", description: "The ADE20K semantic segmentation dataset contains more than 20K scene-centric images exhaustively annotated with pixel-level objects and object parts labels. There are totally 150 semantic categories, which include stuffs like sky, road, grass, and discr...", link: "https://groups.csail.mit.edu/vision/datasets/ADE20K/index.html", task: ["Semantic_Segmentation", "Image-to-Image_Translation", "Scene_Understanding"], instances: "-", category: "Image", field: "Semantic Segmentation", tutorial: "-" },
    { num: 32, id: "ffhq", name: "ffhq", description: "Flickr-Faces-HQ (FFHQ) consists of 70,000 high-quality PNG images at 1024×1024 resolution and contains considerable variation in terms of age, ethnicity and image background. It also has good coverage of accessories such as eyeglasses, sunglasses, hats,...", link: "https://github.com/NVlabs/ffhq-dataset", task: ["Image_Generation", "Image_Super-Resolution", "Image_Inpainting"], instances: "-", category: "Image", field: "Super Resolution", tutorial: "-" },
    { num: 33, id: "ucf", name: "ucf", description: "UCF101 dataset is an extension of UCF50 and consists of 13,320 video clips, which are classified into 101 categories. These 101 categories can be classified into 5 types (Body motion, Human-human interactions, Human-object interactions, Playing musical i...", link: "https://www.crcv.ucf.edu/data/UCF101.php#Results_on_UCF101", task: ["Temporal_Action_Localization", "Action_Recognition", "Action_Detection"], instances: "-", category: "Video", field: "Action Recognition", tutorial: "-" },
    { num: 34, id: "activitynet", name: "Activitynet", description: "The ActivityNet dataset contains 200 different types of activities and a total of 849 hours of videos collected from YouTube. ActivityNet is the largest benchmark for temporal activity detection to date in terms of both the number of activity categories ...", link: "http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html", task: ["Temporal_Action_Localization", "Action_Recognition", "Action_Classification"], instances: "-", category: "Video", field: "Action Recognition", tutorial: "-" },
    { num: 35, id: "ntu", name: "ntu", description: "-", link: "http://rose1.ntu.edu.sg/datasets/actionrecognition.asp", task: ["-"], instances: "-", category: "Video", field: "Action Recognition", tutorial: "-" },
    { num: 36, id: "kinetics", name: "kinetics", description: "The Kinetics dataset is a large-scale, high-quality dataset for human action recognition in videos. The dataset consists of around 500,000 video clips covering 600 human action classes with at least 600 video clips for each action class. Each video clip ...", link: "https://arxiv.org/abs/1705.06950", task: ["Temporal_Action_Localization", "Video_Classification", "Action_Recognition"], instances: "-", category: "Video", field: "Action Recognition", tutorial: "-" },
    { num: 37, id: "youtube_8m_segments_dataset", name: "YouTube-8M Segments Dataset", description: "The YouTube-8M dataset is a large scale video dataset, which includes more than 7 million videos with 4716 classes labeled by the annotation system. The dataset consists of three parts: training set, validate set, and test set. In the training set, each ...", link: "http://research.google.com/youtube8m/index.html", task: ["Video_Classification", "Video_Prediction"], instances: "8 million", category: "Video", field: "Classification", tutorial: "-" },
    { num: 38, id: "davis_16", name: "davis 16", description: "DAVIS16 is a dataset for video object segmentation which consists of 50 videos in total (30 videos for training and 20 for testing). Per-frame pixel-wise annotations are offered.", link: "https://davischallenge.org/index.html", task: ["Video_Object_Segmentation", "Video_Salient_Object_Detection", "Unsupervised_Video_Object_Segmentation"], instances: "-", category: "Video", field: "Object Segmentation", tutorial: "-" },
    { num: 39, id: "davis_17", name: "davis 17", description: "DAVIS17 is a dataset for video object segmentation. It contains a total of 150 videos - 60 for training, 30 for validation, 60 for testing", link: "https://davischallenge.org/index.html", task: ["Semantic_Segmentation", "Video_Object_Segmentation", "Referring_Expression_Segmentation"], instances: "-", category: "Video", field: "Object Segmentation", tutorial: "-" },
    { num: 40, id: "davis_18", name: "davis 18", description: "-", link: "https://davischallenge.org/index.html", task: ["-"], instances: "-", category: "Video", field: "Object Segmentation", tutorial: "-" },
    { num: 41, id: "davis_19", name: "davis 19", description: "-", link: "https://davischallenge.org/index.html", task: ["-"], instances: "-", category: "Video", field: "Object Segmentation", tutorial: "-" },
    { num: 42, id: "mot", name: "MOT", description: "-", link: "https://motchallenge.net/", task: ["-"], instances: "-", category: "Video", field: "Object Tracking", tutorial: "-" },
    { num: 43, id: "vot	", name: "vot", description: "-", link: "https://www.votchallenge.net/index.html", task: ["-"], instances: "-", category: "Video", field: "Object Tracking", tutorial: "-" },
    { num: 44, id: "dexter", name: "dexter", description: "-", link: "http://archive.ics.uci.edu/ml//datasets/Dexter", task: ["-"], instances: "2600", category: "Text", field: "Classification", tutorial: "-" },
    { num: 45, id: "ubuntu_dialogue", name: "ubuntu dialogue", description: "Ubuntu Dialogue Corpus (UDC) is a dataset containing almost 1 million multi-turn dialogues, with a total of over 7 million utterances and 100 million words. This provides a unique resource for research into building dialogue managers based on neural lang...", link: "https://ubuntudialogue.org/", task: ["Dialogue_Generation", "Conversational_Response_Selection", "Answer_Selection"], instances: "-", category: "Text", field: "Dialogue Generation", tutorial: "-" },
    { num: 46, id: "wmt19", name: "wmt19", description: "-", link: "http://www.statmt.org/wmt19/", task: ["-"], instances: "-", category: "Text", field: "Machine Translation", tutorial: "-" },
    { num: 47, id: "wmt18", name: "wmt18", description: "WMT 2018 is a collection of datasets used in shared tasks of the Third Conference on Machine Translation. The conference builds on a series of twelve previous annual workshops and conferences on Statistical Machine Translation.    The conference featured...", link: "http://www.statmt.org/wmt18/papers.html", task: ["Machine_Translation"], instances: "-", category: "Text", field: "Machine Translation", tutorial: "-" },
    { num: 48, id: "wmt17", name: "wmt17", description: "-", link: "http://www.statmt.org/wmt17/results.html", task: ["-"], instances: "-", category: "Text", field: "Machine Translation", tutorial: "-" },
    { num: 49, id: "wmt16", name: "wmt16", description: "WMT 2016 is a collection of datasets used in shared tasks of the First Conference on Machine Translation. The conference builds on ten previous Workshops on statistical Machine Translation.    The conference featured ten shared tasks:    a news translati...", link: "http://www.statmt.org/wmt16/", task: ["Machine_Translation", "Unsupervised_Machine_Translation"], instances: "-", category: "Text", field: "Machine Translation", tutorial: "-" },
    { num: 50, id: "wmt15", name: "wmt15", description: "WMT 2015 is a collection of datasets used in shared tasks of the Tenth Workshop on Statistical Machine Translation. The workshop featured five tasks:    a news translation task,  a metrics task,  a tuning task,  a quality estimation task,  an automatic p...", link: "http://www.statmt.org/wmt15/", task: ["Machine_Translation"], instances: "-", category: "Text", field: "Machine Translation", tutorial: "-" },
    { num: 51, id: "wmt14", name: "wmt14", description: "WMT 2014 is a collection of datasets used in shared tasks of the Ninth Workshop on Statistical Machine Translation. The workshop featured four tasks:    a news translation task,  a quality estimation task,  a metrics task,  a medical text translation task.", link: "http://www.statmt.org/wmt14/", task: ["Machine_Translation", "Unsupervised_Machine_Translation"], instances: "-", category: "Text", field: "Machine Translation", tutorial: "-" },
    { num: 52, id: "semeval-2016", name: "SemEval-2016", description: "-", link: "https://alt.qcri.org/semeval2016/index.php?id=tasks", task: ["-"], instances: "-", category: "Text", field: "Word Sentiment", tutorial: "-" },
    { num: 53, id: "bfm", name: "BFM", description: "-", link: "https://faces.dmi.unibas.ch/bfm/?nav=1-0&id=basel_face_model", task: ["-"], instances: "-", category: "3-D Image", field: "3-D Estimation", tutorial: "-" },
    { num: 54, id: "pix3d", name: "Pix3D", description: "The Pix3D dataset is a large-scale benchmark of diverse image-shape pairs with pixel-level 2D-3D alignment. Pix3D has wide applications in shape-related tasks including reconstruction, retrieval, viewpoint estimation, etc.", link: "http://pix3d.csail.mit.edu/", task: ["3D_Shape_Reconstruction", "3D_Shape_Modeling", "3D_Shape_Classification"], instances: "-", category: "3-D Image", field: "Classification", tutorial: "-" },
    { num: 55, id: "shrec", name: "shrec", description: "The SHREC dataset contains 14 dynamic gestures performed by 28 participants (all participants are right handed) and captured by the Intel RealSense short range depth camera. Each gesture is performed between 1 and 10 times by each participant in two way:...", link: "http://tosca.cs.technion.ac.il/book/shrec_robustness2010.html", task: ["Gesture_Recognition", "Hand_Gesture_Recognition", "Skeleton_Based_Action_Recognition"], instances: "-", category: "3-D Image", field: "Object Recognition", tutorial: "-" },
    { num: 56, id: "shapenetcore", name: "shapenetCore", description: "-", link: "https://www.shapenet.org/", task: ["-"], instances: "-", category: "3-D Image", field: "Semantic Segmentation", tutorial: "-" },
    { num: 57, id: "faust", name: "faust", description: "The FAUST dataset is a dataset of real 3D scans of humans. It contains 10 scanned human shapes in 10 different poses, resulting in a total of 100 non-watertight meshes with 6,890 nodes each.", link: "http://faust.is.tue.mpg.de/", task: ["Semantic_Segmentation", "3D_Reconstruction", "3D_Point_Cloud_Matching"], instances: "-", category: "3-D Image", field: "Semantic Segmentation", tutorial: "-" },
    { num: 58, id: "scape", name: "Scape", description: "-", link: "https://ai.stanford.edu/~drago/Projects/scape/scape.html", task: ["-"], instances: "-", category: "3-D Image", field: "3-D Estimation", tutorial: "-" },
    { num: 59, id: "voxceleb", name: "VoxCeleb", description: "-", link: "http://www.robots.ox.ac.uk/~vgg/data/voxceleb/", task: ["-"], instances: "-", category: "Sound", field: "Video Reconstruction", tutorial: "-" }
]
var index = 0;
var clickCount = 0;
var iframe = document.getElementsByTagName("iframe")[0];
var getItem = document.querySelectorAll(".list-item");
var kindOfLink = document.querySelectorAll("#list-info")[6];
var eventButton = document.getElementById("DataWiki-linkSwitchButton");

// Database load
window.onload = function () {
    var datasetInfo = document.querySelectorAll("#dataset-info");

    if (document.getElementById("here") == undefined) {
        return;
    }

    for (i = 0; i < dataset.length; i++) {
        if (document.getElementById("here").firstChild.textContent == dataset[i].name) {
            datasetInfo[0].innerText = dataset[i].name;
            datasetInfo[1].innerText = dataset[i].category;
            datasetInfo[2].innerText = dataset[i].field;
            datasetInfo[3].innerText = dataset[i].instances;
            datasetInfo[4].innerText = dataset[i].task;
            datasetInfo[5].innerText = dataset[i].description;
            iframe.setAttribute("src", dataset[i].link);
            iframe.setAttribute("width", "100%");
            iframe.setAttribute("height", 770);
            index = i;
        }
    }
}


// 이름 순 정렬
function listSortName() {
    var copy = dataset.slice();
    copy.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();

        if (nameA > nameB) {
            return 1;
        }
        else if (nameA < nameB) {
            return -1;
        }
        else {
            return 0;
        }
    });
    for (i = 0; i < copy.length; i++) {
        getItem[i].setAttribute("href", copy[i].name + ".html");
        getItem[i].innerText = copy[i].name;
    }
}

// Category 순 정렬
function listSortCategory() {
    var copy = dataset.slice();
    copy.sort(function (a, b) {
        var catA = a.category;
        var catB = b.category;

        if (catA > catB) {
            return 1;
        }
        else if (catA < catB) {
            return -1;
        }
        else {
            return 0;
        }
    });
    for (i = 0; i < copy.length; i++) {

        if (copy[i].category == '3-D Image') {
            getItem[i].innerHTML = "<span>3-D Image</span> " + copy[i].name;
            getItem[i].setAttribute("href", copy[i].name + ".html");
        }
        else if (copy[i].category == 'Image') {
            getItem[i].innerHTML = "<span>Image</span> " + copy[i].name;
            getItem[i].setAttribute("href", copy[i].name + ".html");
        }
        else if (copy[i].category == 'Video') {
            getItem[i].innerHTML = "<span>Video</span> " + copy[i].name;
            getItem[i].setAttribute("href", copy[i].name + ".html");
        }
        else if (copy[i].category == 'Text') {
            getItem[i].innerHTML = "<span>Text</span> " + copy[i].name;
            getItem[i].setAttribute("href", copy[i].name + ".html");
        }
        else {
            getItem[i].innerHTML = "<span>Sound</span> " + copy[i].name;
            getItem[i].setAttribute("href", copy[i].name + ".html");
        }
    }
}

// Tutorial 유무 정렬
function listSortTutorial() {
    var copy = dataset.slice();
    copy.sort(function (a, b) {
        var tutA = a.tutorial;
        var tutB = b.tutorial;

        if (tutA > tutB) {
            return -1;
        }
        else if (tutA < tutB) {
            return 1;
        }
        else {
            return 0;
        }
    });
    for (i = 0; i < copy.length; i++) {

        if (copy[i].tutorial != "-") {
            getItem[i].innerHTML = "<span>Y</span> " + copy[i].name;
            getItem[i].setAttribute("href", copy[i].name + ".html");
        }
        else {
            getItem[i].innerHTML = "<span>N</span> " + copy[i].name;
            getItem[i].setAttribute("href", copy[i].name + ".html");
        }
    }
}

// Task 정렬
// (1) 버튼 구현
var count = 0;
function hiddenButton() {
    var searchBar = document.querySelector(".DataWiki-search");
    var selectBar = document.querySelector(".DataWiki-search-hidden");
    count++;
    if (count % 2 == 1) {
        searchBar.style.display = "none";
        selectBar.style.display = "block";
    }
    else {
        searchBar.style.display = "block";
        selectBar.style.display = "none";
    }
}

// (2) 정렬 구현
var selectItem = document.querySelector("select");
if (selectItem) {
    selectItem.addEventListener("click", function () {
        var copy = dataset.slice();
        var j = 0;

        if (selectItem.value == "none") {
            for (i = 0; i < copy.length; i++) {
                getItem[i].setAttribute("href", copy[i].name + ".html");
                getItem[i].innerText = copy[i].name;
            };
        }
        else {
            for (i = 0; i < copy.length; i++) {
                if (copy[i].task.includes(selectItem.value) == true) {
                    getItem[j].setAttribute("href", copy[i].name + ".html");
                    getItem[j].innerText = copy[i].name;
                    j++;
                }
            }
            var k = copy.length - j;
            for (i = 0; i < k; i++) {
                getItem[j].innerHTML = "";
                j++;
            }
        }
    });
}

// Click link button
function linkSwitch() {
    clickCount++;
    if (clickCount % 2 == 0) {
        if (dataset[index].link == "-") {
            iframe.style.display = "none";
            document.getElementById("DataWiki-link-error").style.display = "block";
        }
        else {
            iframe.style.display = "block";
            document.getElementById("DataWiki-link-error").style.display = "none";
        }
        eventButton.value = "Go Tutorial Link";
        kindOfLink.innerText = "Data Link";
        iframe.setAttribute("src", dataset[index].link);
    }
    else {
        if (dataset[index].tutorial == "-") {
            iframe.style.display = "none";
            document.getElementById("DataWiki-link-error").style.display = "block";
        }
        else {
            iframe.style.display = "block";
            document.getElementById("DataWiki-link-error").style.display = "none";
        }
        eventButton.value = "Go Data Link";
        kindOfLink.innerText = "Tutorial Link";
        iframe.setAttribute("src", dataset[index].tutorial);
    }
}

var searchBar = document.getElementById("DataWiki-search-bar");
function searchData() {
    var count = 0;
    for (i = 0; i < dataset.length; i++) {

        if (dataset[i].name.indexOf(searchBar.value) != -1) {
            getItem[count].setAttribute("href", dataset[i].name + ".html");
            getItem[count].innerText = dataset[i].name;
            count++;
        }
    }
    var k = dataset.length - count;
    for (i = 0; i < k; i++) {
        getItem[count].innerHTML = "";
        count++;
    }
}

var category = document.querySelectorAll(".home-article-category");
for (var i = 0; i < 3; i++) {
    var item = category.item(i)
    item.innerHTML = dataset[i + 57].category;
}
var ds_name = document.querySelectorAll(".home-article-body");
for (var i = 0; i < 3; i++) {
    var item = ds_name.item(i)
    item.innerHTML = dataset[i + 57].name;
}
document.querySelectorAll('.home-article-top-dataset').forEach((e,i)=>e.innerHTML=dataset.filter(e=>e.instances!=='-').sort((a, b) => parseInt(b.instances) - parseInt(a.instances))[i].name)
document.querySelectorAll('.home-article-top-category').forEach((e,i)=>e.innerHTML=dataset.filter(e=>e.instances!=='-').sort((a, b) => parseInt(b.instances) - parseInt(a.instances))[i].category)