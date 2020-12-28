// metadata
export const version = "0.6.10"
export const title = "Primitive Data Types"
export const description = "Primitive data types"

const html = `<p>Here we introduce you to some primitive data types available in Solidity.</p>
<ul>
<li><code>boolean</code></li>
<li><code>uint</code></li>
<li><code>int</code></li>
<li><code>address</code></li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Primitives</span> </span>{
    <span class="hljs-keyword">bool</span> boo = <span class="hljs-literal">true</span>;

    <span class="hljs-comment">/*
    uint stands for unsigned integer, meaning non negative integers
    different sizes are available
        uint8   ranges from 0 to 2 ** 8 - 1
        uint16  ranges from 0 to 2 ** 16 - 1
        ...
        uint256 ranges from 0 to 2 ** 256 - 1
    */</span>
    <span class="hljs-keyword">uint8</span> u8 = <span class="hljs-number">1</span>;
    <span class="hljs-keyword">uint256</span> u256 = <span class="hljs-number">456</span>;
    <span class="hljs-keyword">uint</span> u = <span class="hljs-number">123</span>; <span class="hljs-comment">// uint is an alias for uint256</span>

    <span class="hljs-comment">/*
    Negative numbers are allowed for int types.
    Like uint, different ranges are available from uint8 to uint256
    */</span>
    <span class="hljs-keyword">int8</span> i8 = <span class="hljs-number">-1</span>;
    <span class="hljs-keyword">int256</span> i256 = <span class="hljs-number">456</span>;
    <span class="hljs-keyword">int</span> i = <span class="hljs-number">-123</span>; <span class="hljs-comment">// int is same as int256</span>

    <span class="hljs-keyword">address</span> addr = <span class="hljs-number">0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c</span>;

    <span class="hljs-comment">// Default values</span>
    <span class="hljs-comment">// Unassigned variables have a default value</span>
    <span class="hljs-keyword">bool</span> defaultBoo; <span class="hljs-comment">// false</span>
    <span class="hljs-keyword">uint</span> defaultUint; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">int</span> defaultInt; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">address</span> defaultAddr; <span class="hljs-comment">// 0x0000000000000000000000000000000000000000</span>
}
</code></pre>
`

export default html
