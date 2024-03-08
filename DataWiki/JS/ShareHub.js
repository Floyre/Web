window.onload = function(){
    document.getElementById('toc-tensorflow').style.display = 'none';
    document.getElementById('toc-pytorch').style.display = 'none';
    document.getElementById('toc-tensorflow-Text').style.display = 'none';
    document.getElementById('toc-PyTorch-Text').style.display = 'none';
    document.getElementById('toc-tensorflow-Image').style.display = 'none';
    document.getElementById('toc-PyTorch-Image').style.display = 'none';
    document.getElementById('toc-tensorflow-Movie').style.display = 'none';
    document.getElementById('toc-PyTorch-Movie').style.display = 'none';
    document.getElementById('toc-PyTorch-Voice').style.display = 'none';
}

function openCloseTensor(){
    if(document.getElementById('toc-tensorflow').style.display === 'block') {
        document.getElementById('toc-tensorflow').style.display = 'none';
    } else {
        document.getElementById('toc-tensorflow').style.display = 'block';
    }
}

function openClosePyTorch(){
    if(document.getElementById('toc-pytorch').style.display === 'block') {
        document.getElementById('toc-pytorch').style.display = 'none';
    } else {
        document.getElementById('toc-pytorch').style.display = 'block';
    }
}

function openCloseTensorText(){
    if(document.getElementById('toc-tensorflow-Text').style.display === 'block') {
        document.getElementById('toc-tensorflow-Text').style.display = 'none';
    } else {
        document.getElementById('toc-tensorflow-Text').style.display = 'block';
    }
}

function openClosePyTorchText(){
    if(document.getElementById('toc-PyTorch-Text').style.display === 'block') {
        document.getElementById('toc-PyTorch-Text').style.display = 'none';
    } else {
        document.getElementById('toc-PyTorch-Text').style.display = 'block';
    }
}

function openCloseTensorImage(){
    if(document.getElementById('toc-tensorflow-Image').style.display === 'block') {
        document.getElementById('toc-tensorflow-Image').style.display = 'none';
    } else {
        document.getElementById('toc-tensorflow-Image').style.display = 'block';
    }
}

function openClosePyTorchImage(){
    if(document.getElementById('toc-PyTorch-Image').style.display === 'block') {
        document.getElementById('toc-PyTorch-Image').style.display = 'none';
    } else {
        document.getElementById('toc-PyTorch-Image').style.display = 'block';
    }
}

function openCloseTensorMovie(){
    if(document.getElementById('toc-tensorflow-Movie').style.display === 'block') {
        document.getElementById('toc-tensorflow-Movie').style.display = 'none';
    } else {
        document.getElementById('toc-tensorflow-Movie').style.display = 'block';
    }
}

function openClosePyTorchMovie(){
    if(document.getElementById('toc-PyTorch-Movie').style.display === 'block') {
        document.getElementById('toc-PyTorch-Movie').style.display = 'none';
    } else {
        document.getElementById('toc-PyTorch-Movie').style.display = 'block';
    }
}

function openClosePyTorchVoice(){
    if(document.getElementById('toc-PyTorch-Voice').style.display === 'block') {
        document.getElementById('toc-PyTorch-Voice').style.display = 'none';
    } else {
        document.getElementById('toc-PyTorch-Voice').style.display = 'block';
    }
}