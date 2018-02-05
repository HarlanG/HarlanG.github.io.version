---
layout: post
category: 杂记
title: TDD 读后心得
tags: ['TDD', '测试驱动开发']
author: 唐 治
email: tangzhi@asiainfo-linkage.com
description: 在拜读Kent Beck（也是JUnit的联合作者）的大作《Test-Driven Development By Example》（测试驱动开发）之后，内心颇为震撼。也可以算是对自己原有认知的一种思想层面的颠覆。震撼之余，感觉很有必要把自己的一些心得分享出来

---


在拜读Kent Beck（也是JUnit的联合作者）的大作《Test-Driven Development By Example》（测试驱动开发）之后，内心颇为震撼。也可以算是对自己原有认知的一种思想层面的颠覆。震撼之余，感觉很有必要把自己的一些心得分享出来。

书中表述的信息量很大，并且配合了丰富的代码实例，然而由于鄙人理解有限，一遍阅读之后，能够摄取的知识点可能也就是书中内容的三四成。

下面仅将最震撼[自己](http://www.blogways.net)的几点内容分享如下：

### 心得一：先写测试，再写实现


对，你没看错。

按我们的常规，可能都是先写代码，再写测试。至少我本人以前这么干过。也因为以前是先写代码，再写测试，所以，常常感觉没必要写测试。因为代码是怎么实现的，心里明镜似的，写出来的测试代码，意义也不大。除非是开发中有些拿不准的地方，需要写测试来验证，除此之外，基本就不需要写测试。

然而，TDD的精华就是先写测试，再写代码。

只所以这样，我觉得和TDD内在的思想有关，他包含“简单设计”这么一个思想。

### 心得二：简单设计

我们之前做的设计，基本都是大而全的设计，这个不是TDD所提倡的。TDD所提倡的是“简单设计”，即设计以致用，或者说测试以致用。

你目前需要什么功能，就做怎样的设计，或者说体现为写怎样的测试代码。

这样，也就有了“先写测试，再写实现”，所以，从某种角度上来说，我觉得先写的测试，其实上是设计的一种变相表现。

对，我是这么理解的，“测试”是一种“设计”。并且，这种设计不是大而全的设计，而是一种“设以致用”的“简单设计”。

那么，怎么去做到“简单设计”呢？他需要我们，“积跬步，以至千里”。

### 心得三：积跬步，以至千里

关于“积跬步，以至千里”，书中给出了一个非常详细的实践例子。这个例子，给我的感觉，也是相当震撼的，原来居然可以这样来…

我想，这应该也是敏捷开发的一个思想吧，回顾前段时间学习的“scrum”方法，其实，也是对这种“积跬步，以至千里”的思想进行的实践。

但是，怎么去做到“积跬步，以至千里”，我觉得这也是一个技术活，需要好好体会书中的例子，并在实践中加以运用。运用好了，才能把测试当做设计。

当然了，在“积跬步，以至千里”的过程中，必不可少的就是“重构”。

### 心得四：重构

在“积跬步”的过程中，必须不断的做重构，否则代码就会凌乱。而且，不仅需要不断地重构实现代码，也需要不断地重构测试代码。这一点，书中也有实例，很好地进行了佐证。


“简单设计”（或者说测试体现设计）——“积跬步”——“重构”，这是一条线，是一个整体。线上的每个环节，都缺一不可。这条整线，我理解就是本书的最大精华了。

除了这些外，书中还讲了一些方法论，这些方法论包括：“可运行模式”、“测试模式”、“设计模式”、“重构”，这些方法论中，给我感触最深的是“可运行模式”和“测试模式”。这两个模式，也是在“测试”中不可少的两个环节。

要真正做到前面所说的——“简单设计、积跬步”，必须要了解“可运行模式”。

### 心得五：可运行模式

可运行模式中包含四种方法：“伪实现”、“三角法”、“显明实现”、“从一到多”。个人认为，虽然这些内容很简单，但是，这些都是必须要掌握的细节。

这有掌握了这些，并在实践中加以应用，才能做的“积跬步，以至千里”。


### 心得六:测试模式

测试模式实际上就是测试方法，其实，不用看书，我们或多或少，都已经在之前的实践中进行应用了，只是作者做了一个相对来说，比较全面的总结。

如果，你想做好测试，这些模式也需要掌握，至少其中的部分，需要成为我们以后测试中的利器。

这些方法，包含有：“子测试”、“模拟对象”、“自分流”、“日志字符串”、“清扫测试死角”、“不完整测试”等等。


### 总结

以上六点，是我读后的一些心得，记之以分享！



BTW：关于《测试驱动开发》这本书，我读的是网上流传的一个pdf版的中文译本。可能不是最新版，也可能由于是译本，对作者的本意存在理解偏差。不当之处，请指教。